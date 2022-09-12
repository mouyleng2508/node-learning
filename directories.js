const fs = require('fs')

//directories: is asynchronous task which take sometimes to do, it uses a methos from fs called mkdir[stand for: make directory], and we need to specify what directory to make and where
// Note: (./assets) means make a directory called assets in current directory(./)
//---------------
// fs.mkdir('./assets', (err) => {
//     if (err) {
//         console.log("error", err)
//     }
//     console.log("Folder is created")
// })
//----------------

// if we try to run again after the directory is created, it will raise an error which said Directory is existed, so better to check first if the directory we want to make is already existed
// implement below code using existsSync() which is a synchronous method, it will block the code, and check it sth exist
if (!fs.existsSync('./assets')) {
    //if ./assets doesn't exist
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log("error", err)
        }
        console.log("Folder is created")
    })
} else {
    //if ./assets already exist, so remove directory using rmdir()
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log("err", err)
        } else {
            console.log("Folder is deleted")
        }
    })
}


