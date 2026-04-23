#!/usr/bin/env node

const https = require('https');
const fs = require('fs');

const FIGMA_TOKEN = process.env.FIGMA_TOKEN || 'YOUR_FIGMA_TOKEN_HERE';

class FigmaMCPBridge {
    constructor(token) {
        this.token = token;
        this.baseUrl = 'api.figma.com';
    }

    async makeRequest(path) {
        return new Promise((resolve, reject) => {
            const options = {
                hostname: this.baseUrl,
                path: path,
                method: 'GET',
                headers: {
                    'X-Figma-Token': this.token
                }
            };

            https.get(options, (res) => {
                let data = '';

                res.on('data', (chunk) => {
                    data += chunk;
                });

                res.on('end', () => {
                    if (res.statusCode === 200) {
                        resolve(JSON.parse(data));
                    } else {
                        reject(new Error(`HTTP ${res.statusCode}: ${data}`));
                    }
                });
            }).on('error', (err) => {
                reject(err);
            });
        });
    }

    async getFile(fileKey) {
        console.log(`Fetching Figma file: ${fileKey}`);
        return await this.makeRequest(`/v1/files/${fileKey}`);
    }

    async getFileStyles(fileKey) {
        console.log(`Fetching styles from file: ${fileKey}`);
        return await this.makeRequest(`/v1/files/${fileKey}/styles`);
    }

    async getFileComponents(fileKey) {
        console.log(`Fetching components from file: ${fileKey}`);
        return await this.makeRequest(`/v1/files/${fileKey}/components`);
    }

    async getFileVariables(fileKey) {
        console.log(`Fetching variables from file: ${fileKey}`);
        return await this.makeRequest(`/v1/files/${fileKey}/variables/local`);
    }

    async getTeamProjects(teamId) {
        console.log(`Fetching projects for team: ${teamId}`);
        return await this.makeRequest(`/v1/teams/${teamId}/projects`);
    }

    async getProjectFiles(projectId) {
        console.log(`Fetching files from project: ${projectId}`);
        return await this.makeRequest(`/v1/projects/${projectId}/files`);
    }

    extractColors(fileData) {
        const colors = new Set();
        
        function traverse(node) {
            if (node.fills) {
                node.fills.forEach(fill => {
                    if (fill.type === 'SOLID' && fill.color) {
                        const { r, g, b, a = 1 } = fill.color;
                        const hex = rgbToHex(r, g, b);
                        colors.add({ hex, rgba: { r, g, b, a } });
                    }
                });
            }
            if (node.children) {
                node.children.forEach(traverse);
            }
        }

        if (fileData.document) {
            traverse(fileData.document);
        }

        return Array.from(colors);
    }

    extractTypography(fileData) {
        const typography = new Set();
        
        function traverse(node) {
            if (node.style) {
                typography.add({
                    fontFamily: node.style.fontFamily,
                    fontSize: node.style.fontSize,
                    fontWeight: node.style.fontWeight,
                    lineHeight: node.style.lineHeightPx
                });
            }
            if (node.children) {
                node.children.forEach(traverse);
            }
        }

        if (fileData.document) {
            traverse(fileData.document);
        }

        return Array.from(typography);
    }
}

function rgbToHex(r, g, b) {
    const toHex = (val) => {
        const hex = Math.round(val * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

// CLI Interface
const args = process.argv.slice(2);
const command = args[0];
const param = args[1];

const bridge = new FigmaMCPBridge(FIGMA_TOKEN);

async function main() {
    try {
        switch (command) {
            case 'file':
                if (!param) {
                    console.error('Usage: node figma-mcp-bridge.js file <fileKey>');
                    process.exit(1);
                }
                const fileData = await bridge.getFile(param);
                console.log(JSON.stringify(fileData, null, 2));
                break;

            case 'styles':
                if (!param) {
                    console.error('Usage: node figma-mcp-bridge.js styles <fileKey>');
                    process.exit(1);
                }
                const styles = await bridge.getFileStyles(param);
                console.log(JSON.stringify(styles, null, 2));
                break;

            case 'components':
                if (!param) {
                    console.error('Usage: node figma-mcp-bridge.js components <fileKey>');
                    process.exit(1);
                }
                const components = await bridge.getFileComponents(param);
                console.log(JSON.stringify(components, null, 2));
                break;

            case 'variables':
                if (!param) {
                    console.error('Usage: node figma-mcp-bridge.js variables <fileKey>');
                    process.exit(1);
                }
                const variables = await bridge.getFileVariables(param);
                console.log(JSON.stringify(variables, null, 2));
                break;

            case 'colors':
                if (!param) {
                    console.error('Usage: node figma-mcp-bridge.js colors <fileKey>');
                    process.exit(1);
                }
                const file = await bridge.getFile(param);
                const colors = bridge.extractColors(file);
                console.log(JSON.stringify(colors, null, 2));
                break;

            case 'typography':
                if (!param) {
                    console.error('Usage: node figma-mcp-bridge.js typography <fileKey>');
                    process.exit(1);
                }
                const typFile = await bridge.getFile(param);
                const typography = bridge.extractTypography(typFile);
                console.log(JSON.stringify(typography, null, 2));
                break;

            default:
                console.log('Figma MCP Bridge - Available Commands:');
                console.log('  file <fileKey>         - Get complete file data');
                console.log('  styles <fileKey>       - Get file styles');
                console.log('  components <fileKey>   - Get file components');
                console.log('  variables <fileKey>    - Get file variables');
                console.log('  colors <fileKey>       - Extract colors from file');
                console.log('  typography <fileKey>   - Extract typography from file');
                console.log('\nExample: node figma-mcp-bridge.js file abc123xyz');
                break;
        }
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}

module.exports = FigmaMCPBridge;
