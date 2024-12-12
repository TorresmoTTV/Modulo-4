//Escreva um programa que imprima os números de 1 a 20, mas que pare se o
//número for múltiplo de 7.
function func() {
    for (let i = 1; i <= 20; i++) {
        if (!(i % 7 == 0)) {
            console.log('i = ' + i)
        }
    }
}
func();