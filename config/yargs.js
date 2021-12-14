const argv = require("yargs")
  .options("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Numero base",
  })
  
  .options("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Listar los numeros en la base",
  })

  .options("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "Tamaño de la tabla",
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw new Error("La base debe ser un numero");
    }
    return true;
  }).argv;

  module.exports = argv;
