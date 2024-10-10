import fs from 'fs';
import os from 'os';
import path from 'path';

let currentDir = os.homedir();

export const cd = (dir) => {
    const newDir = path.resolve(currentDir, dir);
    if (fs.existsSync(newDir) && fs.lstatSync(newDir).isDirectory()) {
        currentDir = newDir;
        console.log(`You are currently in ${currentDir}`);
    } else {
        console.log('Operation failed!');
    }
}