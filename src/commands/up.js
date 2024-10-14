import fs from 'fs';
import path from 'path';

export const up = () => {
    const newDir = path.resolve(process.cwd(), '..');
    if (fs.existsSync(newDir) && fs.lstatSync(newDir).isDirectory()) {
        process.chdir(newDir);
        console.log(`You are currently in ${newDir}`);
    } else {
        console.log('Operation failed!');
    }
}