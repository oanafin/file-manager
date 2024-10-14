import path from 'path';
import fs from 'fs';


export const cat = (args) => {
    const filePath = path.resolve(process.cwd(), args[0]);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log('Operation failed: ' + err);
        } else {
            console.log(data);
        }
    });
}