//Crie um código que mostre a data atual formatada como "Dia/Mês/Ano".

function data() {
    let data = new Date();

    const dia = String(data.getDate()).padStart(2, '0'); 
    const mes = String(data.getMonth() + 1).padStart(2, '0'); 
    const ano = data.getFullYear(); 

    return `${dia}/${mes}/${ano}`;
}

data();