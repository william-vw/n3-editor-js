# Notation3 Editor in JavaScript

You can find an online demo here: [http://ppr.cs.dal.ca:3002/n3/editor](http://ppr.cs.dal.ca:3002/n3/editor)

## Description

Using the [latest Notation3 grammar](https://github.com/w3c/N3/blob/master/grammar/README.md), 
I generated a JS lexer, parser and listener using the ANTLR tool support. 
See [here](https://github.com/w3c/N3/blob/master/grammar/README.md#creating-the-js-parser) for more information on how to generate the JS parser.

I then used the JS parsing code to flag errors for a [CodeMirror lint-enabled editor](https://codemirror.net/demo/lint.html). 
For syntax highlighting, I re-used the [Turtle mode](https://codemirror.net/mode/turtle/index.html),
extending it with Notation3 keywords. 

The editor has a neat "show AST" function that will print the AST generated by the JS parsing code.

In lieu of a JavaScript Notation3 reasoner, 
I created [a simple server](https://github.com/william-vw/n3-editor-js/blob/master/app.js)
that is called by the editor whenever "execute" is clicked. The server will execute the given formula using 
either the [Eye](https://github.com/josd/eye) or [Cwm](https://www.w3.org/2000/10/swap/doc/cwm.html) system. 
It can easily be configured with additional systems, when they become available.

## Installation

This system requires [NodeJS](https://nodejs.org/en/).

Clone the repository and run `npm install` in the main folder to install the NodeJs packages.

Update the `./config.js` file with your hostname, port number and locations of Eye and Cwm executables.
If you simply want to try the editor locally, you can keep the localhost http config (as long as the port number isn't in use). Update the `./editor/index.html` file with the URL of the NodeJs server. If you're following the regular usage, this should simply be the editor's URL minus the `editor` part (e.g., `http://127.0.0.1:3002/n3` for `http://127.0.0.1:3002/n3/editor`.

Run `./node app.js` to start the server. 
The server will be accessible at `http://<hostname>:<port>/n3`, and the editor at `http://<hostname>:<port>/n3/editor`. 

If you're using localhost and port 3002, you will find the server at [http://127.0.0.1:3002/n3](http://127.0.0.1:3002/n3), and the editor at [http://127.0.0.1:3002/n3/editor](http://127.0.0.1:3002/n3/editor).

## Development

After editing anything inside `editor/` folder (aside from the `lib/` folder), run `npx webpack` (requires (webpack)[https://webpack.js.org/guides/installation/]) to generate `dist\main.js\`. You'll see that `index.html` directly references `dist\main.js\` as well as the files from the `lib/` folder.

- `n3Parser.js` requires a manual edit to make `symbolicNames` available outside of the module. Under `var symbolicNames ..` put `n3Parser.symbolicNames = symbolicNames;`.

**Notes**:
- You can turn off minimization in `webpack.config.js`. Enabling it will drastically reduce the size of `main.js` but also make it much harder to debug.


## Usage

You can of course use the editor manually. You can use shortcuts "alt-x" and "alt-a" to execute the current formula or show its AST, respectively.

You can also pass URL parameters to initialize parts of the editor. This could be useful to show (the output of) examples, for instance. Note that the size of the formula will be limited by the max. length of a URL, which is around 2000 characters.

E.g. (copy URL in address bar):
- Pass a formula and get its deductive closure from Cwm:  
ht<span>tp://</span>ppr.cs.dal.ca:3002/n3/editor/?formula=:i :is :cool . :you :know :i . { :you :know ?a . ?a :is :cool } => { :you :is :cool } .&exec=eye

- Pass a formula and print its AST:  
ht<span>tp://</span>ppr.cs.dal.ca:3002/n3/editor/?formula=:i :am :cool .&ast=true
