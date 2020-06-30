const app = require('./app');

const server = require('http').Server(app);

server.listen(4001,'localhost', ()=> {
    console.log('Server Started');
});


// const http = require('http');

// const server = http.createServer((req,res) => {
//     res.end('Hello World');
// });

// server.listen(3000);