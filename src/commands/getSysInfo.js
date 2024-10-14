import os from 'os';

export const getSysInfo = (args) => {
    let flag = args[0];
    if (flag.includes('--')) {
        flag = flag.replace('--', '');
    } else {
        console.log('Flag not found');
    }

    switch (flag) {
        case 'EOL':
            console.log(JSON.stringify(os.EOL));
            break;
        case 'cpus':
            const cpus = os.cpus();
            console.log(`Overall amount of CPUS ${cpus.length}`);
            console.table(cpus, ['model', 'speed']);
            break;
        case 'homedir':
            console.log(os.homedir());
            break;    
        case 'username':
            const userInfo = os.userInfo();
            console.log(userInfo.username);
            break;
        case 'architecture':
            console.log(process.arch);
            break;
        default:
            console.log('Invalid flag')    
    }
}