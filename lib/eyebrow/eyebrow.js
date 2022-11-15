import { Output } from './output.js';
import { SWIPL } from '/n3/lib/eyebrow/swipl-web-module.js';

const output = new Output();

var Module = {
    noInitialRun: true,
    arguments: [],
    locateFile: function (file) {
        return './' + file;
    },
    preRun: [() => {
        Module.FS.init(undefined, (c) => output.write("stdout", c), (c) => output.write("stderr", c))
    }]
};

function exec(query) {
    Module.prolog.call(query);

    return output.flushAll();
}

function derivations(file) {
    return exec(`main(['--n3', '${file}', '--nope', '--pass-only-new']).`);
}

function deduc_closure(file) {
    return exec(`main(['--n3', '${file}', '--nope', '--pass-all']).`);
}

async function retrieve(link, file) {
    const response = await fetch(link);
    await Module.FS.writeFile(file, await response.text());
}

// initialize
var start = performance.now();

const module = await SWIPL(Module);
module.prolog.call("set_prolog_flag(tty_control, true)");
module.prolog.call("set_prolog_flag(debug_on_error, false)");

var end = performance.now();
console.log("[eyebrow] loading SWIPL:", (end - start));

start = performance.now();

await retrieve('/n3/lib/eyebrow/eye.pl', 'eye.pl');
var msg = await exec("consult('./eye.pl')");

end = performance.now();
console.log("[eyebrow] loading eye.pl:", (end - start));

if (msg.error)
    console.error("eyebrow", msg.error);

const _exec = async function (options, input, callback) {
    // await retrieve(file, 'input.n3');
    Module.FS.writeFile('input.n3', input);
    switch (options.task) {

        case 'derivations':
            msg = await derivations('./input.n3');
            break;

        case 'deductive_closure':
            msg = await deduc_closure('./input.n3');
            break;
    }

    callback(msg);
};

export { _exec as eyebrow };