const algoAsync = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        setTimeout(() => resolve('Algo asincrono'), 1500): reject(new Error('Prueba'))
    });
}


//--Main
const otracosa = async() => {
    const something = await algoAsync();
    console.log(something);
}

console.log('algo normalito');
otracosa();