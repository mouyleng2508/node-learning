const fs = require("fs")

//reading file
//note: ./ means current directory
// readfile method is asynchronous function when it is done it will fire the call back function [in call back function: there is error and data]
fs.readFile("./docs/blog.txt", (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data.toString())
})

console.log("last line")