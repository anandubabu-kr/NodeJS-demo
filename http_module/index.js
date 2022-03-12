const http =  require('http')
// const indexpage = require('./')
const fs = require('fs')



const server = http.createServer((req,res)=>{
    if(req.url === '/welc') {
        res.write('<h1>Welcome fellas</p>');
        res.end()
    }
    else{
        fs.readFile('./index.html','utf-8',(err,data)=>{
            if(err) throw err
            res.write(data)
            res.end()
        });
    }
})

server.listen(3002,()=>{
    console.log("Server is UP and running on port : 3002");
})