const https = require('https');
const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config();

// Figma API credentials
const FIGMA_TOKEN = process.env.FIGMA_TOKEN || 'YOUR_FIGMA_TOKEN_HERE';
const FILE_KEY = 'OjFchNAdeHiNH5W4wYLSGS';
const OUTPUT_DIR = path.join(__dirname, 'design-tokens');

class FigmaTokenSync {
    constructor(token, fileKey) {
        this.token = token;
        this.fileKey = fileKey;
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
                res.on('data', (chunk) => { data += chunk; });
                res.on('end', () => {
                    if (res.statusCode === 200) {
                        resolve(JSON.parse(data));
                    } else {
                        reject(new Error(`HTTP ${res.statusCode}: ${data}`));
                    }
                });
            }).on('error', reject);
        });
    }

    async fetchStyles() {
        console.log('Fetching styles...');
        return await this.makeRequest(`/v1/files/${this.fileKey}/styles`);
    }

    async fetchComponents() {
        console.log('Fetching components...');
        return await this.makeRequest(`/v1/files/${this.fileKey}/components`);
    }

    async fetchFile() {
        console.log('Fetching file data...');
        return await this.makeRequest(`/v1/files/${this.fileKey}`);
    }

    processStyles(stylesData) {
        const processed = {
            typography: [],
            colors: [],
            effects: [],
            lastUpdated: new Date().toISOString()
        };

        if (stylesData.meta && stylesData.meta.styles) {
            stylesData.meta.styles.forEach(style => {
                if (style.style_type === 'TEXT') {
                    processed.typography.push({
                        name: style.name,
                        nodeId: style.node_id,
                        thumbnail: style.thumbnail_url,
                        key: style.key
                    });
                } else if (style.style_type === 'FILL') {
                    processed.colors.push({
                        name: style.name,
                        nodeId: style.node_id,
                        thumbnail: style.thumbnail_url,
                        key: style.key
                    });
                } else if (style.style_type === 'EFFECT') {
                    processed.effects.push({
                        name: style.name,
                        nodeId: style.node_id,
                        thumbnail: style.thumbnail_url,
                        key: style.key
                    });
                }
            });
        }

        return processed;
    }

    processComponents(componentsData) {
        const processed = {
            components: [],
            lastUpdated: new Date().toISOString()
        };

        if (componentsData.meta && componentsData.meta.components) {
            componentsData.meta.components.forEach(component => {
                processed.components.push({
                    name: component.name,
                    nodeId: component.node_id,
                    thumbnail: component.thumbnail_url,
                    key: component.key,
                    description: component.description,
                    containingFrame: component.containing_frame
                });
            });
        }

        return processed;
    }

    async syncAll() {
        try {
            if (!fs.existsSync(OUTPUT_DIR)) {
                fs.mkdirSync(OUTPUT_DIR, { recursive: true });
            }

            const [stylesData, componentsData] = await Promise.all([
                this.fetchStyles(),
                this.fetchComponents()
            ]);

            const processedStyles = this.processStyles(stylesData);
            const processedComponents = this.processComponents(componentsData);

            fs.writeFileSync(
                path.join(OUTPUT_DIR, 'styles.json'),
                JSON.stringify(processedStyles, null, 2)
            );

            fs.writeFileSync(
                path.join(OUTPUT_DIR, 'components.json'),
                JSON.stringify(processedComponents, null, 2)
            );

            fs.writeFileSync(
                path.join(OUTPUT_DIR, 'raw-styles.json'),
                JSON.stringify(stylesData, null, 2)
            );

            fs.writeFileSync(
                path.join(OUTPUT_DIR, 'raw-components.json'),
                JSON.stringify(componentsData, null, 2)
            );

            console.log('✅ Design tokens synced successfully!');
            console.log(`   Typography styles: ${processedStyles.typography.length}`);
            console.log(`   Color styles: ${processedStyles.colors.length}`);
            console.log(`   Effect styles: ${processedStyles.effects.length}`);
            console.log(`   Components: ${processedComponents.components.length}`);

            return {
                styles: processedStyles,
                components: processedComponents
            };
        } catch (error) {
            console.error('❌ Error syncing tokens:', error.message);
            throw error;
        }
    }
}

if (require.main === module) {
    const sync = new FigmaTokenSync(FIGMA_TOKEN, FILE_KEY);
    sync.syncAll().catch(console.error);
}

module.exports = FigmaTokenSync;
