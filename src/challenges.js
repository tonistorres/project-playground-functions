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
function fizzBuzz(arrayDeNumeros) {
  let arrayPalavras = [];
  for (let i = 0; i < arrayDeNumeros.length; i += 1) {
    if ((arrayDeNumeros[i] % 3 === 0) && (arrayDeNumeros[i] % 5 === 0)) {
      arrayPalavras.push("fizzBuzz")
    } else if (arrayDeNumeros[i] % 3 === 0) {
      arrayPalavras.push("fizz")
    } else if (arrayDeNumeros[i] % 5 === 0) {
      arrayPalavras.push("buzz")
    } else {
      arrayPalavras.push("bug!")
    }
  }
  return arrayPalavras;
}

// Desafio 9
function encode(str) {
  let encripta = "";
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === "a") {
      encripta += 1;
    } else if (str[i] === "e") {
      encripta += 2;
    } else if (str[i] === "i") {
      encripta += 3;
    } else if (str[i] === "o") {
      encripta += 4;
    } else if (str[i] === "u") {
      encripta += 5;
    } else {
      encripta += str[i];
    }
  }
  return encripta;
}

function decode(str) {
  let desencriptar = "";
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === "1") {
      desencriptar += "a";
    } else if (str[i] === "2") {
      desencriptar += "e";
    } else if (str[i] === "3") {
      desencriptar += "i";
    } else if (str[i] === "4") {
      desencriptar += "o";
    } else if (str[i] === "5") {
      desencriptar += "u";
    } else {
      desencriptar += str[i];
    }
  }
  return desencriptar;
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
