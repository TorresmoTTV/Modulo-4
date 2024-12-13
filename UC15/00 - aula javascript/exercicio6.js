//Crie uma função que valide se uma string é um e-mail válido.

function email(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regex.test(email)) {
        return true;
    } else {
        return false;
    }
}

console.log(email(prompt("Digite o email")));