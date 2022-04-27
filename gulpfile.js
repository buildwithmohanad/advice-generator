const gulp = require("gulp");
const terser = require("gulp-terser");
const { src, dest } = require("vinyl-fs");
const sourcemaps = require("gulp-sourcemaps");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");
const { parallel } = require("gulp");
const htmlmin = require("gulp-htmlmin");

function uglifyHTML() {
  return src("src/index.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("dist"));
  // I moved the file to the root to deploy it easily
}
function uglifyJS() {
  return src("src/index.js")
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist"));
}
function uglifyCSS() {
  return src("src/index.css")
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer, cssnano]))
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist"));
}

exports.uglifyHTML = uglifyHTML;
exports.uglifyCSS = uglifyCSS;
exports.uglifyJS = uglifyJS;

exports.default = parallel(uglifyHTML, uglifyCSS, uglifyJS);
