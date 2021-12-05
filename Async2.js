async function hola(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 1500);
    })
}

async function hablar(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('*Conversa como una persona cualquiera con* ' + nombre);
            resolve(nombre);
        }, 1500);
    })
}

async function adios(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Hasta nunca! ' + nombre);
            resolve(nombre);
        }, 1500);
    })
}

async function main() {
    let nombre = await hola('NN');
    await hablar(nombre); //el await fuerza al programa a ser esperar el resultado anterior, haciendolo medianamente sincronico
    await adios(nombre);
}

//Main
//console.log('release the beast'); Estas 2 variables se estan ejecutando de forma async
main();
//console.log('kill the beast');