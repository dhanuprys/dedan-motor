const { app } = require('electron');
const nextServer = require('./next-server');
const { createWindow } = require('./window-manager');

nextServer().then(connector => {
    console.log('Setup electron UI...');
    app.whenReady().then(() => {
        app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
            return callback(true);
        });

        createWindow(connector.port);
        app.on('activate', function () {
            if (BrowserWindow.getAllWindows().length === 0) {
                createWindow(connector.port);
            }
        });
    });
});