import fs from 'fs';
import path from 'path';

export const ls = () => {
    
    fs.readdir(process.cwd(), (err, files) => {
        if (err) {
            console.error('Operation failed:', err);
            return;
        }
        
        const sortedFiles = files.map(file => {
            const fullPath = path.join(process.cwd(), file);
            const isDirectory = fs.lstatSync(fullPath).isDirectory();
            return { name: file, type: isDirectory ? 'directory' : 'file' };
        }).sort((a, b) => a.type > b.type ? 1 : -1);
        
        console.table(sortedFiles);
        console.log(`You are currently in ${process.cwd()}`);

    });
} 