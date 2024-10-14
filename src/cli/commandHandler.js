import { cd } from '../commands/cd.js';
import { ls } from '../commands/ls.js';
import { up } from '../commands/up.js';
import { cat } from '../commands/cat.js';
import { add } from '../commands/add.js';
import { rn } from '../commands/rn.js';
import { cp } from '../commands/cp.js';
import { mv } from '../commands/mv.js';
import { rm } from '../commands/rm.js';
import { getSysInfo } from '../commands/getSysInfo.js';
import { hash } from '../commands/hash.js';
import { compress } from '../commands/compress.js';
import { decompress } from '../commands/decompress.js';

export const handleCommand = (input, rlClose) => {
    const [command, ...args] = input.split(' ');
    switch (command) {
        case 'cd':
            cd(args);
            break;
        case 'ls':
            ls();
            break;
        case 'up':
            up();
            break;
        case 'cat':
            cat(args);
            break;
        case 'add':
            add(args);
            break;
        case 'rn':
            rn(args);
            break;    
        case 'cp':
            cp(args);
            break;
        case 'mv':
            mv(args);
            break;
        case 'rm':
            rm(args);
            break;
        case 'os':
            getSysInfo(args);
            break;
        case 'hash':
            hash(args);
            break;
        case 'compress':
            compress(args);
            break;
        case 'decompress':
            decompress(args);
            break;    
        case '.exit':
            rlClose;
            break;    
        default:
            console.log('Invalid input')        
    }
};