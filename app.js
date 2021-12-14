const { crearTabla } = require("./helpers/multiplicar");
const argv = require("./config/yargs");


console.clear();

//const [,, arg3 = 'base=3'] = process.argv;
//const [ , base = 5] = arg3.split('=');

crearTabla(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(`Archivo creado: ${nombreArchivo}`))
  .catch((err) => console.log(err));
