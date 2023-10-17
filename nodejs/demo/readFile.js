const fs = require('fs');

fs.readFile('/Users/wuyinghong/amygit/totoro2023/nodejs/demo/test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
