import fs from 'fs';
import os from 'os';
import path from 'path';

let currentDir = process.cwd();

export const ls = () => {
    
    fs.readdir(currentDir, (err, files) => {
        if (err) {
            console.error('Operation failed:', err);
            return;
        }
        
        const sortedFiles = files.map(file => {
            const fullPath = path.join(currentDir, file);
            const isDirectory = fs.lstatSync(fullPath).isDirectory();
            return { name: file, type: isDirectory ? 'directory' : 'file' };
        }).sort((a, b) => a.type > b.type ? 1 : -1);
        
        console.table(sortedFiles);

    });
} 