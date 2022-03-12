const path = require('path')
const purl= require('./urlmodule');
const fs = require('fs')


console.log("Node JS is a javaScript run time")


// Basics of path module 
const myPath = path.basename(__dirname)
console.log("My basic Path is ", myPath)

// Basics using url module
console.log("Hostename : ",purl.hostname)


// Basics using fs module

fs.writeFile("fsfile.txt",`This is a string destructure\n base name :  ${myPath}`,(err)=>{
    if(err) throw err;
    console.log("Write Completed")
});
fs.readFile('./fsfile.txt','utf8',(err,data)=>{
    if(err) throw err
    console.log(data)
})




