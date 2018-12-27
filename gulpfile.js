const { src, dest, task, series, watch } = require('gulp')
const babel = require('gulp-babel')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
var argv = require('minimist')(process.argv.slice(2));

console.log(argv.env)

// babel编译
task('compile', done => {
  return src('./src/**')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(dest('./lib'))
  done()  
})

// 引用合并
task('browserify', done => {
  return browserify()
    .add('./lib/index.js')
    .bundle()
    .pipe(source('recofetch.js'))
    .pipe(dest('./dist'))
  done()
})

// 压缩并重命名
task('uglify', async() => {
  return src('./dist/recofetch.js')
    .pipe(uglify())
    .pipe(rename('recofetch.min.js'))
    .pipe(dest('./dist/'))
})

// 生成最终结果
task('final', series('compile', 'browserify', 'uglify'))

// 
task('start', async() => {
  watch('./src/*.js', series('final'))
})