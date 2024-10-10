import { cd } from '../commands/cd.js';
import { ls } from '../commands/ls.js';

export const handleCommand = (input) => {
    const [command, ...args] = input.split(' ');

    switch (command) {
        case 'cd':
            cd(args[0]);
            break;
        case 'ls':
            ls();
            break;
        default:
            console.log('Invalid input')        
    }
};