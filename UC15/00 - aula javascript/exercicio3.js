//Escreva um programa que verifique se um número é par ou ímpar usando
//operadores lógicos.

function func() {
    let n

    n = parseFloat(prompt("Digite o valor que deseja descobrir se é par ou ímpar: "));

    if (n % 2 == 0) {
        console.log("O número " + n + " é par");
    } else {
        console.log("O número " + n + " é ímpar");
    }
}
func();