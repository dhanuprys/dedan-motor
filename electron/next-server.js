const https = require('https');
const fs = require('fs');
const { env } = require('process');
const express = require('express');
const next = require('next');
const { Server: WebSocketServer } = require('ws');

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

const credentials = {
    cert: fs.readFileSync('./cert.pem'),
    key: fs.readFileSync('./key.pem'),
};
const expressServer = express();
const httpsServer = https.createServer(credentials, expressServer);
const wss = new WebSocketServer({ server: httpsServer });

function nextServer() {
    console.log('Starting next server...');
    return new Promise(async (resolve, reject) => {
        try {
            // Preparing next.js server
            await app.prepare();

            // Server port setter (middleware)
            expressServer.use((request, response, next) => {
                request.port = port;
                return next();
            });

            // Server handler by next.js
            expressServer.all('*', (request, response) => {
                return handle(request, response);
            });

            // Websocket configuration
            wss.on('connection', () => {
                console.log('connection');
            });

            // Starting https and wss server
            httpsServer.listen(port, () => {
                console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);

                console.log('Next server setup done.');
                resolve({
                    https: httpsServer,
                    wss: wss,
                    port: port
                });
            });
        } catch (error) {
            reject(error);
        }
    });
};

// Standalone server
if (env.SERVER_AUTO_START !== undefined) {
    nextServer();
}

module.exports = nextServer;