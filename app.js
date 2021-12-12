
const { crearTabla } = require("./helpers/multiplicar");

console.clear();

const base = 5;
crearTabla(base)
    .then(nombreArchivo => console.log(`Archivo creado: ${nombreArchivo}`))
    .catch(err => console.log(err));
