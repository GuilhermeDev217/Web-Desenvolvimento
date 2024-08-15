/*
1. String -> Textos. "" ou '' ou `` (crase)

`` É uma template strings
*/

const idade = 10
const carro = "BMW"
const myString = `Minha idade é ${/*codigo java script exp:*/ idade}, to novo
e preciso trabalhar muito para ter uma ${carro}`

console.log(myString)

//   NUMBERS

const number1 = 20 //nunca usar virgula
let number2 = 4
let number3 = number1 * number2

/*

* multiplicar 

/ dividir

+ somar

- diminuir

*/

console.log(number3)

// Object


const name = 'raimundo'
const age = '45'
const address = 'rua 40'

const raimundo = {
    name: "Raimundo",
    age: "30",
    address: {
        street: "rua 40",
        block:"bloco 7",
        apt: "apartamento 205"
    }
    ,
    city: "Rio de janeiro",
    country: "Brasil"
}

console.log(raimundo) // mostra todas as informações

console.log(raimundo.age) //mostra um objeto especifico

console.log(raimundo.address.apt) // mostra um objeto especifico dentro ate de outro objeto

// Null & Undefined

// null é como se fosse nulo ou n ter o dado, undefined o dado nao existe