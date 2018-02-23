const image = require('../assets/icon.png')
console.log(`${Date.now()} ${image}`)

export default function(context) {
  console.log('hello');
  context.document.showMessage("It's alive 🙌")
}

// "/Applications/Sketch.app/Contents/Resources/sketchtool/bin/sketchtool" run "/Users/dmeehan/Documents/Dropbox/Projects/node-tutorials/skpm-require-crash/plugin.sketchplugin" "my-command-identifier" --without-activating
