const { crearTabla } = require("./helpers/multiplicar");
const argv = require("yargs")
  .options("b", {
    alias: "base",
    type: "number",
    demandOption: true,
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw new Error("La base debe ser un numero");
    }
    return true;
  })
  .options("l", {
    alias: "listar",
    type: "boolean",
    default: false,
  }).argv;

console.clear();

//const [,, arg3 = 'base=3'] = process.argv;
//const [ , base = 5] = arg3.split('=');

crearTabla(argv.b, argv.l)
  .then((nombreArchivo) => console.log(`Archivo creado: ${nombreArchivo}`))
  .catch((err) => console.log(err));
