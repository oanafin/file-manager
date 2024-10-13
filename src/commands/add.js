import path from 'path';
import fs from 'fs';

export const add = (args) => {
    const filePath = path.resolve(process.cwd(), args[0]);
    fs.writeFile(filePath, '', (err) =>{
        if (err) {
            console.log('Operation failed: ' + err);
        } else {
            console.log(`file ${args[0]} is created!`);
        }
    });
}