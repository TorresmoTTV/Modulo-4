//Crie uma classe Pessoa com propriedades nome e idade , e um método que
//diga "Olá" com o nome da pessoa.

//function escrever() {
    
//    let pes = [0,1];


//    pes[0] = prompt("Digite o seu nome ou nome da pessoa que deseja: ");
//    pes[1] = parseFloat(prompt("Digite a idade da pessoa escolhida: "));

//    console.log("Olá " + pes[0] + " sua idade é " + pes[1]);
//}

//escrever();


function escrever_obj() {
    
    let pes = {nome: "",
                idade: ""};



    pes.nome = prompt("Digite o seu nome ou nome da pessoa que deseja: ");
    pes.idade = parseFloat(prompt("Digite a idade da pessoa escolhida: "));

    console.log("Olá " + pes.nome + " sua idade é " + pes.idade);
}

escrever_obj();