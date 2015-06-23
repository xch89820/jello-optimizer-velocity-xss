var vmxss = require('../index.js');

var fs = require('fs');
// 或者改为同步的API读取
var content = fs.readFileSync('test.vm');
var out = vmxss(content.toString(), null, {});

fs.writeFileSync( 'out.vm', out);