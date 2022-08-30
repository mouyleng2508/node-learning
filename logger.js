var url = 'http://mylogger.io/log'

function log(message) {
    //send http request
    console.log(message);
}

module.exports.log = log

// export only single function
module.exports = log