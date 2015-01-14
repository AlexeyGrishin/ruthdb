Single file DB with both data and DB code in one file.

`ruth.html`` is an example of such DB which:
* contains data ('Hello world')
* is a node.js script which provides CLI (run `node ruth.html set "Hello again!"`, `node ruth.html get` and check the file itself)
* is a importable node.js module with 'save' and 'load' methods. Try running `node sample.js`
* is a http server which allows to see/modify data - run `node ruth.html server` and open http://localhost:4444 . Try to submit the form and check the file)

This is just proof of concept, will be rethinked later.