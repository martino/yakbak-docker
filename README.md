This container run a simple node file and install Yakbak (https://github.com/flickr/yakbak).

You need to mount a simple yakbak server like:

```
var http = require('http');
var yakbak = require('yakbak');


http.createServer(yakbak('https://wonderfulapi.io/', {
    dirname: '/fixture',
})).listen(3080);
```

and launch the docker:

`docker run -it --rm -v ~/myYakBak.js:/server.js -p 3080:3080 docker pull mpiz1/yakbak`
