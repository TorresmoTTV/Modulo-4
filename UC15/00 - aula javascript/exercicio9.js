//Crie um objeto Carro com propriedades como marca , modelo e ano , e um
//método que exibe essas informações.

function carro() {
    let carro = {marca: "", modelo: "", ano: ""};

    carro.marca = prompt("Digite a marca do carro: ");
    carro.modelo = prompt("Digite o modelo do carro: ");
    carro.ano = prompt("Digite o ano do carro: ");

    console.log("A marca do carro é " + carro.marca + ", o modelo do carro é " + carro.modelo + ", e o ano é " + carro.ano +".");
}

carro();