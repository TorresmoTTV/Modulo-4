//Crie um objeto que armazene as notas de três alunos e calcule a média.

function media() {
    let n1, n2, n3, med

    n1 = parseFloat(prompt("Digite a primeira nota que deseja realizar o calculo de média: "));
    n2 = parseFloat(prompt("Digite a segunda nota que deseja realizar o calculo de média: "));
    n3 = parseFloat(prompt("Digite a terceira nota que deseja realizar o calculo de média: "));

    med = (n1 + n2 + n3) / 3;

    console.log("A média é " + med);
}

media();