var http = require('http');
var yakbak = require('yakbak');


http.createServer(yakbak('https://wonderfulapi.io/', {
    dirname: '/fixture',
})).listen(3080);
