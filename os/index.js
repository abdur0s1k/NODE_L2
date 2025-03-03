require('dotenv').config();
const os = require('os');     


function getOSInfo() {
    console.log(`Платформа: ${os.platform()}`);
    console.log(`Архитектура: ${os.arch()}`);
    console.log(`Главная директория: ${os.homedir()}`);
    console.log(`Имя хоста: ${os.hostname()}`);
    console.log(`Интерфейсы сети:`, os.networkInterfaces());
}

getOSInfo();

