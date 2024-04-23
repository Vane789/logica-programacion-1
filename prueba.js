function buscarMayor(numeros) {
    if (numeros[0] > numeros[1] && numeros[0] > numeros[2]) {
        console.log("El numero mayor es: ", numeros[0]);
    }
    else if (numeros[1] > numeros[2]) {
        console.log("El numero mayor es: ", numeros[1]);
    }
    else {
        console.log("El numero mayor es: ", numeros[2]);
    }
}

function buscarMenor(numeros) {
    if (numeros[0] < numeros[1] && numeros[0] < numeros[2]) {
        console.log("El numero menor es: ", numeros[0]);
    }
    else if (numeros[1] < numeros[2]) {
        console.log("El numero menor es: ", numeros[1]);
    }
    else {
        console.log("El numero menor es: ", numeros[2]);
    }
}

function ordenarMenor(numeros) {
    let vectorCopia = [...numeros];
    for (let i = 0; i < vectorCopia.length; i++) {
        for (let j = i + 1; j < vectorCopia.length; j++) {
            if (vectorCopia[i] > vectorCopia[j]) {
                let aux = vectorCopia[j];
                vectorCopia[j] = vectorCopia[i];
                vectorCopia[i] = aux;
            }
        }
    }

    console.log("Menor a mayor: ", vectorCopia);
}

function ordenarMayor(numeros) {
    let vectorCopia = [...numeros];
    
    for (let i = 0; i < vectorCopia.length; i++) {
        for (let j = i + 1; j < vectorCopia.length; j++) {
            if (vectorCopia[i] < vectorCopia[j]) {
                let aux = vectorCopia[j];
                vectorCopia[j] = vectorCopia[i];
                vectorCopia[i] = aux;
            }
        }
    }

    console.log("Mayor a menor: ", vectorCopia);
    console.log("El valor medio es " , vectorCopia[1])
}

function main() {
    n1 = parseInt(prompt("Ingrese el numero uno"));
    n2 = parseInt(prompt("Ingrese el numero dos"));
    n3 = parseInt(prompt("Ingrese el numero tres"));

    numeros = [n1, n2, n3]

    if(n1 == n2 || n1 == n3 || n2 == n3 ){
        console.log("Hay números iguales")
    }

    buscarMayor(numeros);
    buscarMenor(numeros);
    ordenarMenor(numeros)
    ordenarMayor(numeros)

}

main();

