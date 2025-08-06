const { n3reasoner } = require ('eyereasoner');
const fs = require('fs/promises');

exports.exec = async function (options, file) {
    const data = await fs.readFile(file, { encoding: 'utf8' });
    // console.log(data);

    let task = options.task
    const result = await n3reasoner(data, undefined, {
        output: task,
        outputType: 'string'
    });
    return result;
}
