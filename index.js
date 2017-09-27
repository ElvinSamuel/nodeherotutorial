// Beginner NodeJS Stuff

/* 
   1) Totally forgot what Node is like without Express,
   2) Without the Express framwork, we use the built-in 'http' module in NodeJS
   3) Never thought about using 'const' instead of variable. Makes sense since
      you don't want it to change anyway. 
*/

/*Testing Debugger Functionality*/
function add (a, b) {
    debugger;
    return a + b;
};

var res = add('apple', 4); // Should return some error(?)


const http = require('http');
// const port = 3000;

const requestHandler = (request, response) => {
    console.log(request.url);
    response.end("Hello Node.js Server!");
};

const server = http.createServer(requestHandler);

server.listen(process.env.PORT, (err) => {
    if (err) {
        return console.log('something bad happend', err);
    }
    
    console.log('server is listening on ' + process.env.PORT);
});