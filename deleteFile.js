const fs = require('fs')

//delete file: use method unlink() to delete a file
// first of make sure the file is existed

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log("error", err)
        } console.log("file is deleted")
    })
}