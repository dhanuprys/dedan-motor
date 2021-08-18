const { env } = require('process');
const { BrowserWindow } = require('electron');

module.exports.createWindow = function createWindow(port) {
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

    win.loadURL(isMobile ? url + 'mobile/car' : url);
}