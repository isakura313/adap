const sass = require("gulp-sass")
const del = require('del')

const { src, dest, watch, parallel } = require('gulp');

async function tosass(){
    src('*.sass')
    //перевод from  sass to css
    .pipe(sass().on('error', sass.logError))
    .pipe(dest(''));
}


// exports.default = 
const sass_file = watch(['*.sass']);

function watchFile(){
    sass_file.on('change', function() {
        tosass();
    });
    
}

async function move(){
    return src(['*.html', '*.css', 'js/*.js'])
    .pipe(dest("build"))
}

async function d(){
     del(['build']);
}
function build(){
    await d;
    await tosass;
    await move;
}

exports.tosass = tosass;
exports.watch = watchFile;
exports.d = d;
exports.build = build;