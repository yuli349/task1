const fs = require('fs-extra');
const path = require('path');
const manifest = require('../build_ignored/asset-manifest.json');

const SRC = 'build_ignored';
const DST = 'build';
const MEDIA = path.join('static', 'media');

let css = ``;
let js = '';

for (let entry of manifest.entrypoints) {
    if (entry.endsWith('.css')) {
        css += readFile(entry);
    }

    if (entry.endsWith('.js')) {
        js += readFile(entry);
    }
}

writeFile('stories.css', css);
writeFile('stories.js', js);
fs.copySync(path.join(SRC, MEDIA), path.join(DST, MEDIA), { overwrite: true });

function readFile(filename) {
    return fs.readFileSync(path.join(SRC, filename));
}

function writeFile(filename, content) {
    fs.writeFileSync(path.join(DST, filename), content);
}
