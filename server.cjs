const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const FigmaTokenSync = require('./sync-figma-tokens.cjs');

const PORT = 3000;
const FIGMA_TOKEN = process.env.FIGMA_TOKEN || 'YOUR_FIGMA_TOKEN_HERE';
const FILE_KEY = 'OjFchNAdeHiNH5W4wYLSGS';

const figmaSync = new FigmaTokenSync(FIGMA_TOKEN, FILE_KEY);

function organizeComponents() {
    return new Promise((resolve, reject) => {
        exec('node organize-components.js', (error, stdout, stderr) => {
            if (error) {
                console.error('Error organizing components:', error);
                reject(error);
            } else {
                console.log(stdout);
                resolve();
            }
        });
    });
}

const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer(async (req, res) => {
    console.log(`${req.method} ${req.url}`);

    if (req.url === '/api/sync-figma' && req.method === 'POST') {
        try {
            await figmaSync.syncAll();
            await organizeComponents();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true, message: 'Synced successfully' }));
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: false, error: error.message }));
        }
        return;
    }

    let filePath = '.' + req.url.split('?')[0];
    if (filePath === './') {
        filePath = './index.html';
    }
    // Map /component-thumbs/ → ./public/component-thumbs/ (Vite public dir)
    if (filePath.startsWith('./component-thumbs/')) {
        filePath = './public' + filePath.slice(1);
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - File Not Found</h1>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end('Server Error: ' + error.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log('🚀 GFG Design System Server Running!');
    console.log(`📱 Local: http://localhost:${PORT}`);
    console.log(`🎨 Figma File: ${FILE_KEY}`);
    console.log(`\n💡 The design system will auto-sync from Figma every 60 seconds`);
    console.log(`🔄 Manual sync: Click the refresh button in the UI\n`);
});

setInterval(async () => {
    console.log('⏰ Auto-syncing from Figma...');
    try {
        await figmaSync.syncAll();
        await organizeComponents();
    } catch (error) {
        console.error('Auto-sync failed:', error.message);
    }
}, 60000);
