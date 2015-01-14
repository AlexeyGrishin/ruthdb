var fs = require('fs');

var html = fs.readFileSync('src/client.html', {encoding: 'utf-8'});
var clientjs = fs.readFileSync('./client.min.js', {encoding: 'utf-8'});
var serverjs = fs.readFileSync('./server.min.js', {encoding: 'utf-8'});
var data = "Hello world!";

fs.writeFileSync('ruth.html',
    "//" + html + "<script>" + clientjs + "</script><!--\n" + serverjs + '//--><script>//<!--\nvar data="' + data + '";//</script>'
);
