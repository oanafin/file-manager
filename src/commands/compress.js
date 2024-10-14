import path from 'path';
import fs from 'fs';
import zlib from 'zlib';

export const compress = (args) => {
    const sourcePath = path.resolve(process.cwd(), args[0]);
    const destinationPath = path.resolve(process.cwd(), args[1]);

    const source = fs.createReadStream(sourcePath);
    const destination = fs.createWriteStream(destinationPath);

    const brotli = zlib.createBrotliCompress();

    source.pipe(brotli).pipe(destination).on('finish', () => {
        console.log(`File ${args[0]} is compressed to ${args[1]}`);
    }).on('error', (err) => {
        console.log('Operation failed: ' + err);
    });
}