let { promiseExec } = require('../cmd_util.js')
let { config } = require('../../config.js')
let fs = require('fs/promises')
let { clean } = require('../eye/eye.js')

const out = config.out;
const folder = config.tools.spin3.folder;
const sparql2spin = config.tools.triplify.exec

exports.exec = async function(options, data, query) {    
    const subTask = options.subTask;

    const times = []

    // const spin_file = `${folder}/out/query.spin`
    const spin_file = `${out}/query.spin`
    let start = performance.now()
    let cmd = `java -jar ${sparql2spin} -sparql ${query} -multi > ${spin_file};`
    await promiseExec(cmd);
    let end = performance.now()
    times.push(`generate spin: ${parseFloat(end - start).toFixed(0)}`)

    // const n3_file = `${folder}/out/n3query.n3`
    const n3_file = `${out}/n3query.n3`
    cmd = `eye ${spin_file} ${folder}/auxiliary-files/aux.n3 --query ${folder}/queries/query_general.n3 --nope --quantify http://eyereasoner.github.io/.well-known/genid/ > ${n3_file} 2>/dev/null;`
    start = performance.now()
    await promiseExec(cmd);
    end = performance.now()
    times.push(`generate n3: ${parseFloat(end - start).toFixed(0)}`)

    let eyeCmd = `eye ${folder}/auxiliary-files/runtime.n3 ${data} --query ${n3_file} --nope`
    switch (subTask) {
        case 'derivations':
            eyeCmd += " --pass-only-new"
            break
        case 'deductive_closure':
            eyeCmd += " --pass-all"
            break
    }
    cmd = `${eyeCmd} 2>/dev/null;`
    start = performance.now()
    let [ output, ] = await promiseExec(cmd);
    end = performance.now()
    times.push(`execute n3: ${parseFloat(end - start).toFixed(0)}`)

    output = clean(output, data)

    // const spin = await fs.readFile(spin_file) + ""
    // const n3 = await fs.readFile(n3_file) + ""

    return { 
        data: output,
        times: times,
        spin: "out/query.spin",
        n3: "out/n3query.n3"
    }
}