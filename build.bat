@echo off
call npm install uglify-js -g
call uglifyjs src/server.js --compress --mangle > server.min.js
call uglifyjs src/client.js --compress --mangle > client.min.js
node build.js
del server.min.js
del client.min.js