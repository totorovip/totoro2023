const fs = require('fs');
const content = "append txt";
fs.writeFile('/Users/wuyinghong/amygit/totoro2023/nodejs/demo/test.txt', content,{ flag: 'a+' }, err=> {
    if(err) {
        console.log(err);
    }
})