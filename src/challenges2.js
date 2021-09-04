// Desafio 10
function techList(arrayNamesTechnologies, name) {
  let newArray = [];
  for (tech of arrayNamesTechnologies.sort()) {
      newArray.push({ tech, name });
  }
  if (newArray.length === 0) {
      return 'Vazio!';
  }
  return newArray;
}

// Desafio 11
function generatePhoneNumber(numberPhone) {
  let numberMask = '';
  let aux = [];
  if (numberPhone.length !== 11) {
    return 'Array com tamanho incorreto.'
  }
  for (let i = 0; i < numberPhone.length; i += 1) {
    if ((numberPhone[i] < 0 || numberPhone[i] > 9)) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
    for (let j = 0; j < numberPhone.length; j += 1) {
      if (numberPhone[i] === numberPhone[j]) {
        let count = 0;
        for (let k = 0; k < aux.length; k += 1) {
          if (aux[k] === numberPhone[i]) {
            count++;
          }
        }
        if (count === 0) {
          aux.push(numberPhone[i]);
        }
      }
    }
  }

  let coutFinal = 0;
  for (let i = 0; i < aux.length; i++) {
    coutFinal = 0;
    for (let j = 0; j < numberPhone.length; j++) {
      if (aux[i] === numberPhone[j]) {
        coutFinal += 1;
        if (coutFinal >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }

  numberPhone.push('(');//11
  numberPhone.push(')');//12
  numberPhone.push('-');//13
  numberPhone.push(' ');//14

  for (let m = 0; m < numberPhone.toString().length; m++) {
    if (m === 11) {
      numberMask += numberPhone[m];
      break;
    }
  }

  for (let m = 0; m < numberPhone.toString().length; m++) {
    if (m === 0) {
      numberMask += numberPhone[m];
      break;
    }
  }


  for (let m = 0; m < numberPhone.toString().length; m++) {
    if (m === 1) {
      numberMask += numberPhone[m];
      break;
    }
  }

  for (let m = 0; m < numberPhone.toString().length; m++) {
    if (m === 12) {
      numberMask += numberPhone[m];
      break;
    }
  }

  for (let m = 0; m < numberPhone.toString().length; m++) {
    if (m === 14) {
      numberMask += numberPhone[m];
      break;
    }
  }

  for (let m = 0; m < numberPhone.toString().length; m++) {
    if (m === 2) {
      numberMask += numberPhone[m];
      break;
    }
  }

  for (let m = 0; m < numberPhone.toString().length; m++) {
    if (m === 3) {
      numberMask += numberPhone[m];
      break;
    }
  }


  for (let m = 0; m < numberPhone.toString().length; m++) {
    if (m === 4) {
      numberMask += numberPhone[m];
      break;
    }
  }

  for (let m = 0; m < numberPhone.toString().length; m++) {
    if (m === 5) {
      numberMask += numberPhone[m];
      break;
    }
  }

  for (let m = 0; m < numberPhone.toString().length; m++) {
    if (m === 6) {
      numberMask += numberPhone[m];
      break;
    }
  }

  for (let m = 0; m < numberPhone.toString().length; m++) {
    if (m === 13) {
      numberMask += numberPhone[m];
      break;
    }
  }

  for (let m = 0; m < numberPhone.toString().length; m++) {
    if (m === 7) {
      numberMask += numberPhone[m];
      break;
    }
  }

  for (let m = 0; m < numberPhone.toString().length; m++) {
    if (m === 8) {
      numberMask += numberPhone[m];
      break;
    }
  }

  for (let m = 0; m < numberPhone.toString().length; m++) {
    if (m === 9) {
      numberMask += numberPhone[m];
      break;
    }
  }

  for (let m = 0; m < numberPhone.toString().length; m++) {
    if (m === 10) {
      numberMask += numberPhone[m];
      break;
    }
  }
  return numberMask;

}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
