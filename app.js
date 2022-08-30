//require("./subModule/logger")
//require("../logger")



//load module
const logger = require("./logger")

//require("./subModule/logger") 
//require("../logger")

logger.log('message')

// loading module another way:
const log = require("./logger")
log("message1")