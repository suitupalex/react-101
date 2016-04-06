# React 101

A presentation on the basics of ReactJS using ReactJS.

## Dependencies

You will need to download and install
[Node 4/5](https://nodejs.org/en/download).

## Install

The following list of commands will download this repository and install the
package.

```bash
$ git clone https://github.com/suitupalex/react-101
$ cd react-101
$ NODE_ENV=development npm install
```

## Building and Running the Presentation

The following command will build the presentation and run it. A browser window
will automatically open.

```bash
$ NODE_ENV=production npm run build
$ REACT_101_PORT=8080 npm start
```

## Watching

The following command will run the presentation and start a watch.

```bash
$ NODE_ENV=development REACT_101_PORT=8080 npm run watch
```

This command is useful if you want to experiment and make changes to the
presentation. Any changes you make to the source code will automatically trigger
a rebuild.
