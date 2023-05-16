const http = require('http');
const myName = require('./feature')
const server = http.createServer((req,res) => {
    // console.log(req.url)
    // res.end("Noicee")
    if(req.url === '/about'){
        res.end("<h1>About Page</h1>")
    }
    else if(req.url === '/'){
        res.end("<h1>Home Page</h1>")
    }
    else if(req.url === '/contact'){
        res.end("<h1>Contact Page</h1>")
    }
    else{
        res.end("<h1>Page Not Found!!</h1>")
    }
})

server.listen(5000,'localhost' ,() => {
    console.log("server is working")
})
// console.log('first')