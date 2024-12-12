//Crie uma função que receba dois números e retorne a soma deles.
function func() {
    let a, b, c

    console.log("Digite os valores para soma");
    a = parseFloat(prompt("Digite o primeiro valor: "));

    b = parseFloat(prompt("Digite o segundo valor: "));

    c = a + b

    console.log("O valor total é " + c);
}

func();