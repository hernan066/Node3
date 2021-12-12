const fs = require("fs");

const crearTabla = async (base = 5) => {
  try {
    console.log("===============");
    console.log(`  Tabla del ${base}`);
    console.log("===============");
  
    let salida = "";
  
    for (let index = 1; index <= 10; index++) {
      salida += `${base} x ${index} = ${base * index}\n`;
    }
    console.log(salida);
  
    fs.writeFileSync(`tabla-${base}.txt`, salida);
    return `tabla-${base}.txt ha sido creado!`;
  } catch (error) {
     throw error;
  }
};

module.exports = {
  crearTabla,
};
