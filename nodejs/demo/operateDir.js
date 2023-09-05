const fs = require('fs');
const folderName = '/Users/wuyinghong/amygit/totoro2023/nodejs/demo/test';
try {
    if(!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
    } else {
    console.log('exit');
    }
} catch(e) {
    console.log(e);
}