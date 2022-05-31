// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------
/*
// EXERCÍCIO 0A
function soma(num1, num2) {
return num1 + num2
}
// EXERCÍCIO 0B
function imprimeMensagem() {
  const mensagem = prompt('Digite uma mensagem!')
return console.log(mensagem)
}
// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------
// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura01 = prompt("Insira a altura do retângulo")
  const largura01 = prompt("Insira a largura")
  const resultado = Number(altura01)*Number(largura01)
return console.log(resultado)
}
// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtaual = prompt("Insira o ano atual")
  const anoNascimento = prompt("Insira o ano de nascimento")
  const age = anoAtaual-anoNascimento
return console.log(age)
}
// EXERCÍCIO 03
function calculaIMC(peso, altura) {    
  return peso / (altura * altura)
}
calculaIMC(peso,altura) 
// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome04 = prompt("Insira o nome:")
  const idade04 = prompt("Insira a idade:")
  const email04 = prompt("Insira seu email:")
  return console.log(`Meu nome é ${(nome04)}, tenho ${(idade04)} anos, e o meu email é ${(email04)}.`) 
}
// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const vetorCores = []
  vetorCores[0] = prompt("cor 1")
  vetorCores[1] = prompt("cor 2")
  vetorCores[2] = prompt("cor 3")
return console.log(vetorCores)
}
// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
return string.toUpperCase()
}
// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
return custo / valorIngresso
}
// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length == string2.length
}
// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
return array[0]
}
retornaPrimeiroElemento(array)
*/
// EXERCÍCIO 10

function retornaUltimoElemento(array10) {
    array10.push = array10[array10.length]
  
    return console.log(array10[array10.length-1])
  
  }
  retornaUltimoElemento(array10)
  array10 =[]
  
  /*
  // EXERCÍCIO 11
  function trocaPrimeiroEUltimo(array11) {
    array.push(array11.splice(0,1)[0]);
    
  }
  // EXERCÍCIO 12
  function checaIgualdadeDesconsiderandoCase(string1, string2) {
    return string1.includes(string2)
    
  }
  // EXERCÍCIO 13
  function checaRenovacaoRG() {
    // implemente sua lógica aqui
  }
  // EXERCÍCIO 14
  function checaAnoBissexto(ano) {
    // implemente sua lógica aqui
  }
  // EXERCÍCIO 15
  function checaValidadeInscricaoLabenu() {
    
  */