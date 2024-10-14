import fs from 'fs';
import path from 'path';

export const cd = (args) => {
    const newDir = path.resolve(process.cwd(), args[0]);
    if (fs.existsSync(newDir) && fs.lstatSync(newDir).isDirectory()) {
        process.chdir(newDir);
        console.log(`You are currently in ${newDir}`);
    } else {
        console.log('Operation failed!');
    }
}