import path from 'path';
import fs from 'fs';
import crypto from 'crypto';

export const hash = (args) => {
    const pathToFile = path.resolve(process.cwd(), args[0]);
    fs.readFile(pathToFile, (err, data) => {
        if (err) {
            console.log('Operation failed: ' + err);
        } else {
            const hash = crypto.createHash('sha256').update(data).digest('hex');
            console.log(hash);
        };
    });
    
}