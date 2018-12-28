const { src, dest, task, series, watch } = require('gulp')
const babel = require('gulp-babel')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const argv = require('minimist')(process.argv.slice(2));
const babelify = require('babelify')

console.log(argv.env)

// babel编译
task('compile', () => {
  return src('./src/**')
    .pipe(babel())
    .pipe(dest('./lib')) 
})

// 引用合并
task('browserify', () => {
  return browserify({
    entries: ['./lib/index.js'],
    transform: ['babelify'] 
  })
  .bundle()
  .pipe(source('recofetch.js'))
  .pipe(dest('./dist'))
})

// 压缩并重命名
task('uglify', () => {
  return src('./dist/recofetch.js')
    .pipe(uglify())
    .pipe(rename('recofetch.min.js'))
    .pipe(dest('./dist/'))
})

// 生成最终结果
task('final', series('compile', 'browserify', 'uglify'))

// 时时编译
task('start', async() => {
  watch('./src/*.js', series('final'))
})