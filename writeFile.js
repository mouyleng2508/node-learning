const fs = require("fs")

//write file: is asynchronous function which take sometimes to do
// take 3 arguments 
// [first arg]: is a relative path to the file we want to write 
// [second arg]: is the text we want to write
// [third arg]: is the callback function 
fs.writeFile('./docs/blog.txt', 'hello world', () => {
    console.log("File is written")
})

// note: if we input the wrong file name, it will not raise an error but it will create a new file if it isn't exit
fs.writeFile('./docs/blog1.txt', 'hello again', () => {
    console.log("+ File is written")
})
