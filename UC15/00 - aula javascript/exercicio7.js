//Crie um array com 5 números e mostre a soma deles.

function soma5() {
    let n = [0, 1, 2, 3, 4], s;

    for (let index = 0; index < 5; index++) {
        n [index] = parseFloat(prompt("Digite o valor " + (index + 1) + ": "));
    }

    s = n[0] + n[1] + n[2] + n[3] + n[4]

    console.log("A soma dos valores é: " + s);
}

soma5();

function somarray() {
    let n = [], s = 0;

    n.push(parseFloat(prompt("Digite o primeiro valor")));
    n.push(parseFloat(prompt("Digite o segundo valor")));
    n.push(parseFloat(prompt("Digite o terceiro valor")));
    n.push(parseFloat(prompt("Digite o quarto valor")));
    n.push(parseFloat(prompt("Digite o quinto valor")));

    for (let index = 0; index < n.length; index++) {
        s = s + n[index]
    }

    console.log("A soma dos valores é: " + s);
}

somarray();