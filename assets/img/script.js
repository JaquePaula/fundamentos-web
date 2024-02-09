/*
Case sensitive = reconhece letras maiúsculas e minúsculas

por tag: getElementByTagName()
por Id: getElementById()
por nome: getElementByName()
por classe: getElementByClassName()
por seletor: querySelector()
*/

let nome = document.getElementById('nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');

nome.style.width = '50%';
email.style.width = '50%';
assunto.style.width = '50%';

let nomeOk = false;
let emailOk = false;
let assuntoOk = false;