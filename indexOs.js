const os = require('os');
console.log("This is the architecture of my system: " + os.arch());
const freeMemory = os.freemem();
console.log(freeMemory/1024/1024/1024);
const totalMemory = os.totalmem();
console.log(totalMemory/1024/1024/1024)
console.log(os.hostname())
console.log(os.platform())
console.log(os.tmpdir())
console.log(os.type())