// No cambies los nombres de las funciones.

String.prototype.reverse = function () {
  let cadena = '';
  for (let i = this.length - 1; i >= 0; i--) {
    cadena = cadena + this.charAt(i);
  }
  return cadena;
}

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let res = [];
  for (let item in objeto) {
    res.push([item, objeto[item]]);
  }
  return res;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let array = string.split('');
  let res = {};
  array.forEach((letra) => {
    res[letra] = (res[letra] || 0) + 1;
  });
  return res;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let array = s.split('');
  let mayusculas = '';
  let minusculas = '';
  array.forEach((letra) => {

    if (letra === letra.toUpperCase()) {
      mayusculas = mayusculas + letra;
    } else {
      minusculas = minusculas + letra;
    }

  });
  return mayusculas + minusculas;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let array = str.split(' ');
  let word = '';
  let frase = '';
  for (i = 0; i < array.length; i++) {
    word = array[i].reverse();
    frase = frase + ' ' + word;
  }

  return frase.trim();
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let char = numero.toString().reverse();
  let reverse = parseInt(char);

  if (numero === reverse) {
    return 'Es capicua';
  } else {
    return 'No es capicua';
  }
}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let arr = cadena.split('');
  let res = '';

  for (i = 0; i < arr.length; i++) {
    if (arr[i] === 'a' || arr[i] === 'b' || arr[i] === 'c') {
      continue;
    } res = res + arr[i];
  }

  return res;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let newArr = arr.sort(function (a, b) {
    if (a.length > b.length) {
      return 1;
    }
    if (a.length < b.length) {
      return -1;
    }
    return 0;
  });

  return newArr;
}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let res = [];
  arreglo1.forEach((elemento) => {
    for (i = 0; i < arreglo2.length; i++) {
      if (elemento === arreglo2[i]) {
        res.push(elemento)
      }
    }

  });
  return res;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

