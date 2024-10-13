import { cd } from '../commands/cd.js';
import { ls } from '../commands/ls.js';
import { up } from '../commands/up.js';
import { cat } from '../commands/cat.js';

export const handleCommand = (input) => {
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
        default:
            console.log('Invalid input')        
    }
};