// http is a native package. http is an object 
const http = require('http');
const fs = require('fs')


// console.log(http.createServer())
// code block require to has a server
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' })
//     res.end('This is my first Node Server');
// });

const server = http.createServer((req, res) => {
    console.log(`Looking for route: ${req.url}`)
    if (req.url === '/') {
        // // load html file
        res.writeHead(200, { 'content-type': 'text/html' })
        const readStream2 = fs.createReadStream(__dirname + '/index.html')
        readStream2.pipe(res);
    }

    else if (req.url === '/users') {
        res.writeHead(200, { 'content-type': 'application/json' })
        // Load an object
        const obj = [
            {
                name: 'huong',
                email: 'flo@me.com',
            },
            {
                name: 'linh',
                email: 'josh@me.com',
            },
        ];
        res.end(JSON.stringify(obj))
    }
    
    else if (req.url === '/text'){
        //prepare
        res.writeHead(200, { 'content-type': 'text/plain' })
        // prepare data to send
        const readStream = fs.createReadStream(__dirname+'/lorem.txt', 'utf8')
        readStream.pipe(res);
        
    }
    else if (req.url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'})
        const readStreamAbout = fs.createReadStream(__dirname+ '/about.html')
        readStreamAbout.pipe(res)
    }
    else {
        res.writeHead(200, {'content-type': 'text/plain'})
        const readStreamErr = fs.createReadStream(__dirname+'/404.txt')
        readStreamErr.pipe(res)
    }
});

server.listen(3000, () => {
    console.log('Server listening on port 3000')
})



