var { exec } = require('child_process')

exports.promiseExec = function(cmd) {
    return new Promise((resolve, reject) => {
        exec(cmd, (err, stdout, stderr) => {
            if (err)
                reject(err)
            else
                resolve([ stdout, stderr ])
        })
    });
}