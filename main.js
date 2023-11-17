// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

 function numberParametro(num1){
    if (num1 % 2 == 0) {
         console.log ('El numero es par')
    }else {
        console.log ('El numero es impar')
     }
 }

numberParametro (0)

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

 function numberMayor(num3, num4){
     if (num3>num4){
         console.log ( num3, 'es mayor que', num4)
     } else if (num3<num4){
         console.log ( num4, 'es mayor que', num3)
     } else if (num3=num4){
         console.log ('Los dos numeros son iguales')
     }
 }

numberMayor (55, 100)

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

 function numberMultiplier(num5){
     if (num5 % 5 == 0){
         console.log ('El numero es multiplo de 5')
     } else{
         console.log ('El numero no es multiplo de 5')
     }
 }

 numberMultiplier(7)

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

 function counterNumber(num6){
     let i = 0;
     while (i <= num6) {
         console.log(i);
         i++;
     }
 }

 counterNumber(15)

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

 function wordPrint(palabra, num7){
     for (let i = 0; i < num7; i++) {
         console.log (palabra);
     }    
 }

wordPrint('Hola, como estas?', 7);

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

 function parametroArray(arrayRecibido) {
  
     for (let i = 0; i < arrayRecibido.length; i++) {
       console.log(arrayRecibido[i])
     }
   }
  
   let miArray = [1, 3, 5, 7];
  
   parametroArray(miArray);

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

function consoleOctavo(arrayOctavo){
    if (arrayOctavo.length >= 5) {
      for (let i = 0; i < arrayOctavo.length ; i++) {
        if (i !== 4) {
          console.log(arrayOctavo[i]);
        }
      }
    }
  }
  
let miArrayOctavo = [1, 2 ,3 ,4 ,5 ,6 ,7, 8, 9, 10];
  
consoleOctavo(miArrayOctavo);

//8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function arrayNumeroMultiplier(arrayNumeros, multiplicador) {
    if (arrayNumeros.length > 0 && typeof multiplicador === 'number') {
      for (let i = 0; i < arrayNumeros.length; i++) {
        const resultado = arrayNumeros[i] * multiplicador;
        console.log(resultado);
      }
    }
  }
  
  let miArrayNumeros = [1, 2, 3, 4 ,5];
  
  arrayNumeroMultiplier(miArrayNumeros, 3);

