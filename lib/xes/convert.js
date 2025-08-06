let { promiseExec } = require('../cmd_util.js')
var prefix = require('../prefix_map.js')
var { config } = require('../../config/main.js')

const xesFolder = config.tools.xes.folder

exports.exec = async function(xes_file, n3_file) {
    const cmd = `python ${xesFolder}/convert_log.py ${xes_file} ${n3_file}`

    let [ stdout, stderr ] = await promiseExec(cmd)
    // if (stderr)
    //     throw stderr

    return stdout
}