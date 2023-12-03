const { src, dest, watch } = require("gulp");

const sass = require("gulp-sass")(require("sass"));

const plumber = require("gulp-plumber");

function css(done) {
  src("src/scss/**/*.scss") // Identificando el archivo SASS
    .pipe(plumber()) // Si tiene problemas, no se detenga

    .pipe(sass()) // Compilarlo

    .pipe(dest("build/css")); // Almacenando en el disco duro

  done(); // Callback que avisa a gulp cuando llegamos al final
}

function dev(done) {
  watch("src/scss/**/*.scss", css); // Ejecutando la funcion css cuando se detecten cambios en los archivos SASS

  done();
}

exports.css = css; // Exportando la funcion css para que gulp la pueda ejecutar con el comando gulp css

exports.dev = dev; // Exportando la funcion dev
