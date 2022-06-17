const { read } = require('fs');

const fs = require('fs').promises;
const readFile = async (path)=>{
    try {
        const data = await fs.readFile(path)
        console.log(data.toString());
    } catch (error) {
        console.log(error)
    }
}
readFile('Technology.txt')