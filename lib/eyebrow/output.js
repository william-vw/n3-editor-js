class _Output {

    constructor() {
        this.buffers = {
            stdout: [],
            stderr: []
        };

        this.output = document.getElementById('output');
    }

    write(to, c) {
        if (c)
            this.buffers[to].push(c);

        // console.log(c);
        // if (c == 10 || c == null)
        // this.flush(to);
    }

    flushAll() {
        return new Promise((resolve, reject) => {
            let stderr = this.flush("stderr");
            if (stderr) {
                if (stderr.includes("**")) {
                    let dl = stderr.lastIndexOf("**") + 2
                    let error = stderr.substring(dl).trim()

                    // console.log("error:", error)
                    resolve({ error: error });
                    return;
                }
            }

            let output = this.flush("stdout");
            console.log(output);
            let dl = output.indexOf("\n", output.indexOf("#eye"))
            let dl2 = output.lastIndexOf("\n", output.indexOf("#ENDS") - 2)
            output = output.substring(dl, dl2).trim()

            // console.log("output:", output);
            resolve({ success: output });
        });
    }

    flush(to) {
        let str = String.fromCharCode.apply(null, this.buffers[to]);
        this.buffers[to] = [];

        return str;
    }
};

export { _Output as Output };