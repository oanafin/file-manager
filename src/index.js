import readline from 'readline';
import os from 'os';
import { handleCommand } from './cli/commandHandler.js';

const args = process.argv.slice(2);
const usernameArg = args.find(arg => arg.startsWith('--username='));
const username = usernameArg ? usernameArg.split('=')[1] : 'User';
console.log(`Welcome to the File Manager, ${username}!`);

let currentDir = os.homedir();
console.log(`You are currently in ${currentDir}`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    handleCommand(input);
});

rl.on('close', () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
});