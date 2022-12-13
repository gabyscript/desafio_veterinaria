const fs = require('fs')

let fichas = fs.readFileSync('citas.json', 'utf-8')

const registrar = (nombre, edad, animal, color, enfermedad) => {

    console.log(`${nombre} tiene ${edad}, es un ${animal} ${color} y tiene ${enfermedad}`)  

    let cita = {
        
        'Nombre del animal': nombre,
        'Edad': edad,
        'Tipo de animal': animal,
        'Color del animal': color,
        'Enfermedad': enfermedad
    } 

    let citas = JSON.parse(fichas).concat(cita);    
    
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));
    
    console.log("Su cita se ha registrado con éxito");
    
}

const leer = () => {      

    JSON.parse(fichas).forEach((ficha) => {
        console.log(ficha)
        })
      
}

const vaciar = () => {

    fs.writeFileSync('citas.json', '[]')

}

module.exports = {registrar, leer, vaciar}