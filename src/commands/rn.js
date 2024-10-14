import path from 'path';
import fs from 'fs';

export const rn = (args) => {
    const oldPathFile = path.resolve(process.cwd(), args[0]);
    const newPathFile = path.resolve(process.cwd(), args[1]);

    fs.rename(oldPathFile, newPathFile,(err) => {
        if (err) {
            console.log('Operation failed: ' + err);
        } else {
            console.log(`file ${args[0]} renamed to ${args[1]}`);
        }
    });
}