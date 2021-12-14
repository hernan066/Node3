const fs = require("fs");
const colors = require('colors');

const crearTabla = async (base = 5, listar = false , hasta = 10) => {
  
  
  try {
    
  
    let salida = "";
  
    for (let index = 1; index <= hasta; index++) {
      salida += `${base} x ${index} = ${base * index}\n`;
    }
    if(listar){

      console.log("===============".rainbow);
      console.log(`  Tabla del ${base}`.green);
      console.log("===============".rainbow);
      
      console.log(salida);
      console.log(hasta);
    }
  
    fs.writeFileSync(`tabla-${base}.txt`, salida);
    return `./salida/tabla-${base}.txt ha sido creado!`;
  } catch (error) {
     throw error;
  }
};

module.exports = {
  crearTabla,
};
