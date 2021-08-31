// Desafio 1
function compareTrue(valueA, valueB) {
  if (valueA === true && valueB === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(arrayString) {
  return arrayString[arrayString.length - 1] + ', ' + arrayString[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;

}

// Desafio 6

function highestCount(arrayNumero) {

  let contaNumeroVezes = 0;
  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  let maiorNumero = Math.max.apply(null, arrayNumero);

  for (let i = 0; i < arrayNumero.length; i += 1) {
    if (arrayNumero[i] === maiorNumero) {
      contaNumeroVezes += 1;
    }
  }
  return contaNumeroVezes;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
