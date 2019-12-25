const path = require("path");
const fs = require("fs");

// Run command: node generate_rewrites.js > rewrites.json
// Then paste content of rewrites.json in firebase.json

function traverseDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      traverseDir(fullPath);
    } else {
      if (
        path.basename(fullPath) === "index.html"
        ) {
          const rootPath = fullPath.replace(/^\.\.\/hiiha\.fr/, "");
          const rootPathNoFilename = rootPath.replace(/index\.html$/, "");
          console.log(
`{
  "source": "${rootPathNoFilename}",
  "destination": "${rootPath}"
},`
            );
          }
        }
      });
    }
    
  console.log("[");
  traverseDir("../hiiha.fr");
  console.log("]");
