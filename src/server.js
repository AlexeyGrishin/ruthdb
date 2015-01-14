var fs = require('fs')
    , http = require('http')
    , url = require('url')
    ;
module.exports = {
    load: function() { return data; },
    save: function(d) { data = d; }
};
var filepath = __filename;

var tail = '";//</script>';


function save(d) {
    var fd = fs.openSync(filepath, 'r+');
    var size = fs.fstatSync(fd).size;
    var dataOffset = (size - data.length - tail.length);//0;
    var buffer = new Buffer(d + tail);
    //dataOffset = dataOffset || (size - data.length - tail.length);
    fs.writeSync(fd, buffer, 0, buffer.length, dataOffset);
    data = d;
    fs.truncateSync(fd, dataOffset + data.length + tail.length);
    fs.closeSync(fd);
}

function runServer() {
    http.createServer(function(request, response) {
        var parsed = url.parse(request.url, true);
        if (request.method == 'GET' && !parsed.query.data) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            fs.createReadStream(filepath).pipe(response);
            //response.write(fs.readFileSync(filepath, "utf-8"));
            //response.end();
        }
        else {
            save(parsed.query.data);
            response.writeHead(302, {Location: '/'});
            response.end();
        }
    }).listen(4444);
}

function main() {
    if (process.argv[2]) {
        switch (process.argv[2]) {
            case 'get': console.log(data); break;
            case 'set': save(process.argv[3]); break;
            case 'server': runServer(); break;
            default:
                console.log('usage: node.js db.html (get|set <data>)');
        }
    }
    else {
        console.log('usage: node.js db.html (get|set <data>)');
    }
}

if (filepath == process.argv[1]) {
    setTimeout(main,0);
}