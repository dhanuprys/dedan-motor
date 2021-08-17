const { env } = require('process');
const { app, BrowserWindow } = require('electron');
const nextServer = require('./next-server');

function createWindow(port) {
    const url = `https://localhost:${port}/`;
    const isMobile = env.TEST_ENV === 'mobile';
    const win = new BrowserWindow({
        width: isMobile ? 414 : 800,
        height: isMobile ? 736 : 600,
        webPreferences: {
            webSecurity: false,
            allowRunningInsecureContent: true
        }
    });

    win.loadURL(isMobile ? url + 'mobile' : url);
}

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