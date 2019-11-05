// REQUIRE

const fs = require('fs');
const colors = require('color');




let listarTabla = (base,limite = 10) => {

    console.log(`==================`).green;
    console.log(`===Tabla de ${base}===`);
    console.log(`==================`);
  
    for (let i = 0; i<=limite; ++i){
       console.log(`${base} * ${i} = ${base * i}`);
    }
}




let crearArchivo =  ( base,  limite =10) => {

            return new Promise ((reslove, reject )=>{

                if (!Number(base)){
                    reject(`El valor indroducido ${ base } no es un numero`);
                    return;
                }

                let data = '';

                for (let i = 0; i<=limite; ++i){
                    data += `${base} * ${i} = ${base * i}\n `;
                }
                
                
                fs.writeFile(`tablas/tabla-${base}-al-${ limite }.txt`, data, (err) => {
                
                    if (err) 
                      reject (err);
                    else 
                       reslove (`tabla-${base}.txt`);
                
                    console.log(`El archivo tabla-${base}-al-${limite}..txt ha sido creado`);
                  });
                
        

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}
