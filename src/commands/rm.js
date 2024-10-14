import path from 'path';
import fs from 'fs';


export const rm = (args) => {
    const filePath = path.resolve(process.cwd(), args[0]);

    fs.rm(filePath, (err) => {
        if (err) {
            console.log('Operation failed: ' + err);
        } else {
            console.log(`File ${args[0]} is deleted!`);
        }
    });
}