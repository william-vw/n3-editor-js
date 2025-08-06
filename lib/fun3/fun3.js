// const fs = require('fs/promises');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

var { config } = require('../../config/main.js')

const fun3Folder = config.tools.fun3.folder

exports.exec = async function (options, query, rules, data) {
    let cmd = `python3 ${fun3Folder}/fun3/python/main.py --query ${query} --rules ${rules} --data ${data} `
    console.log("cmd", cmd);
    const { stdout, stderr } = await exec(cmd)

    console.log("stderr:", stderr)
    if (stderr) {
        throw stderr
    }

    // console.log("stdout:", stdout)
    let output = stdout
    let sep = "-- START CODE --"
    let sepIdx = output.indexOf(sep)

    let results = output.substring(0, sepIdx)
    let code = output.substring(sepIdx + sep.length)

    return { results: results, code: code }
}
