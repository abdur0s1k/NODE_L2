require('dotenv').config();
const os = require('os');     


function getOSInfo() {
    console.log(`Платформа: ${os.platform()}`);
    console.log(`Архитектура: ${os.arch()}`);
    console.log(`Главная директория: ${os.homedir()}`);
    console.log(`Имя хоста: ${os.hostname()}`);
    console.log(`Интерфейсы сети:`, os.networkInterfaces());
}

function checkMemory() {
    const freeMemoryGB = os.freemem() / (1024 ** 3);
    console.log(`Свободная память: ${freeMemoryGB.toFixed(2)} GB`);
    if (freeMemoryGB > 4) {
        console.log("Свободной памяти достаточно.");
    } else {
        console.log("Свободной памяти мало!");
    }
}

getOSInfo();
checkMemory();
