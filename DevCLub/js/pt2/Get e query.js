/*


document -> html

getElementById -> Trás UM elemento pelo ID

getElementByClassName -> Trás TODOS os elementos com essa classe
getElementByTagName -> Trás TODOS os elementos com essa TAG
getElementByName -> Trás TODOS os elementos com esse NAME

querySelector -> Trás UM elemento, o PRIMEIRO que encontrar
querySelectorAll -> Trás TODOS os elementos que encontrar

*/

//para ir ate o html:

const input = document.getElementById("main-input")

console.log(input)

const elementos = document.getElementsByClassName("parag")

console.log(elementos)

const names = document.getElementsByTagName("p")

console.log(names)

const elements = document.getElementsByName("norte")

console.log(elements)