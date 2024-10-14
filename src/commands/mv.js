import path from 'path';
import fs from 'fs';

export const mv = (args) => {
    const pathToFile = path.resolve(process.cwd(), args[0]);
    const pathToNewDirectory = path.resolve(process.cwd(), args[1], args[0]);

    fs.rename(pathToFile, pathToNewDirectory, (err) => {
        if (err) {
            console.log('Operation failed: ' + err);
        } else {
            console.log(`file ${args[0]} moved to ${pathToNewDirectory}`);
        }
    });
}