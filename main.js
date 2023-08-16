//Ejercicio 1
let pesoIMC = document.getElementById("imc-peso");
let alturaIMC = document.getElementById("imc-altura");
let btnIMC = document.getElementById("calcularIMC");
let spanIMC = document.getElementById("resultadoIMC");

function bmi(peso, altura) {
  if (isNaN(peso) || isNaN(altura) || peso === 0 || altura === 0) {
    return (spanIMC.innerHTML = `
      <div class="alert alert-danger" role="alert">
        Rellene todos los campos con valores válidos / Numeros Mayores a 0
      </div>
    `);
  } else {
    let resultadoIMC = peso / (altura * altura);
    let mensaje = "";

    if (resultadoIMC < 18.5) {
      mensaje = "Peso bajo.";
    } else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9) {
      mensaje = "Normal";
    } else if (resultadoIMC >= 25 && resultadoIMC <= 29.9) {
      mensaje = "Sobrepeso";
    } else if (resultadoIMC >= 30) {
      mensaje = "Obesidad";
    }

    return (spanIMC.innerHTML = `
      <div class="alert alert-info" role="alert">
        El resultado del IMC es: ${resultadoIMC.toFixed(
          2
        )} y su estado es ${mensaje}
      </div>
    `);
  }
}

btnIMC.addEventListener("click", function (event) {
  event.preventDefault();
  let peso = parseFloat(pesoIMC.value);
  let altura = parseFloat(alturaIMC.value);
  bmi(peso, altura);
});

//Ejercicio 2
let numerolikes = document.getElementById("like-numero");
let btnLike = document.getElementById("calcularlikes");
let spanLike = document.getElementById("resultadolikes");

function likes(numero) {
  let mensaje = "";
  if (numero >= 1000000000) {
    mensaje = Math.floor(numero / 1000000000) + "B";
  } else if (numero >= 1000000) {
    mensaje = Math.floor(numero / 1000000) + "M";
  } else if (numero >= 1000) {
    mensaje = Math.floor(numero / 1000) + "K";
  } else {
    mensaje = numero.toString();
  }
  return (spanLike.innerHTML = `
  <div class="alert alert-success" role="alert">
   El resultado es : ${mensaje}
  </div>
`);
}

btnLike.addEventListener("click", function (event) {
  event.preventDefault();
  let numero = parseInt(numerolikes.value);
  likes(numero);
});
//Ejercicio 2

//Ejercicio 3
let usuario = document.getElementById("usuario");
let password = document.getElementById("password");
let btnLogin = document.getElementById("login");
let estadoUser = document.getElementById("estadoUser");

function login(user, pass) {
  if (user === "" || pass === "") {
    return (estadoUser.innerHTML = `
        <div class="alert alert-danger" role="alert">
            Rellene todos los campos con valores válidos
        </div>
        `);
  } else if (user === "admin" && pass === "1234") {
    return (estadoUser.innerHTML = `
        <div class="alert alert-success" role="alert">
            Bienvenido ${user}
        </div>
        `);
  } else {
    return (estadoUser.innerHTML = `
        <div class="alert alert-danger" role="alert">
            Usuario o contraseña incorrecta
        </div>
        `);
  }
}

btnLogin.addEventListener("click", function (event) {
  event.preventDefault();
  let user = usuario.value;
  let pass = password.value;
  login(user, pass);
});
//Ejercicio 3

//Ejercicio 4
let edadCalculo = document.getElementById("edad");
let ingresoCalculo = document.getElementById("ingresos");
let btnCalculo = document.getElementById("calcularImpuesto");
let estadoImpuesto = document.getElementById("estadoImpuesto");

function calcularImpuestos(edad, ingreso) {
  if (edad >= 18 && ingreso >= 1000) {
    let nuevosIngresos = ingreso * 0.4;
    return (estadoImpuesto.innerHTML = `
    <div class="alert alert-dark" role="alert">
        El resultado es: Q ${nuevosIngresos}.00
    </div>
    `);
  } else {
    return (estadoImpuesto.innerHTML = `
    <div class="alert alert-danger" role="alert">
        No tiene que pagar impuestos 0
    </div>
    `);
  }
}

btnCalculo.addEventListener("click", function (event) {
  event.preventDefault();
  let edad = parseInt(edadCalculo.value);
  let ingreso = parseFloat(ingresos.value);
  calcularImpuestos(edad, ingreso);
});
//Ejercicio 4

//Ejercicio 5
let btnArreglo = document.getElementById("realizarArreglo");
let estadoArreglo = document.getElementById("estadoArreglo");

function arreglo(arreglo) {
  let mensaje = "";
  for (let i = 0; i < arreglo.length; i++) {
    mensaje += ` ${arreglo[i]}<br>`;
  }

  return (estadoArreglo.innerHTML = `
    <div class="alert alert-primary" role="alert">
        ${mensaje}
    </div>
    `);
}

btnArreglo.addEventListener("click", function (event) {
  event.preventDefault();
  const miArreglo = [1, "Edwar", 42, "Alejandro", 123, "Castellanos", 17];
  arreglo(miArreglo);
});
//Ejercicio 5

//Ejercicio 6
let oracion = document.getElementById("oracion");
let Caracter = document.getElementById("Caracter");
let estadoOracion = document.getElementById("estadoOracion");
let btnCaracteres = document.getElementById("calcularCaracteres");

function numeroDeCaracteres(oracion, caracter) {
  let contador = 0;
  for (let i = 0; i < oracion.length; i++) {
    if (oracion[i] === caracter) {
      contador++;
    }
  }
  return (estadoOracion.innerHTML = `
    <div class="alert alert-primary" role="alert">
        El caracter ${caracter} se repite ${contador} veces
    </div>
    `);
}

btnCaracteres.addEventListener("click", function (event) {
  event.preventDefault();
  let oracionDefintiva = oracion.value;
  let caracterDefinitivo = Caracter.value;
  numeroDeCaracteres(oracionDefintiva, caracterDefinitivo);
});
//Ejercicio 6

//Ejercicio 7
let btnSuma = document.getElementById("realizarSuma");
let estadoSuma = document.getElementById("estadoSuma");

function sumarArreglo(arreglo) {
  let suma = 0;
  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }

  return (estadoSuma.innerHTML = `
    <div class="alert alert-primary" role="alert">
        La suma de los numeros es: ${suma}
    </div>
    `);
}

btnSuma.addEventListener("click", function (event) {
  event.preventDefault();
  const numeros = [1, 2, 3, 4, 5, 6, 71, 8, 9, 10];
  sumarArreglo(numeros);
});
//Ejercicio 7

//Ejercicio 8
let btnMultiplicacion = document.getElementById("realizarMultiplicacion");
let estadoMultiplicacion = document.getElementById("estadoMultiplicacion");

function multiplicacionArreglo(arreglo) {
  let Multiplicacion = 1;
  for (let i = 0; i < arreglo.length; i++) {
    Multiplicacion *= arreglo[i];
  }

  return (estadoMultiplicacion.innerHTML = `
    <div class="alert alert-primary" role="alert">
        La multiplicacion de los numeros es: ${Multiplicacion}
    </div>
    `);
}

btnMultiplicacion.addEventListener("click", function (event) {
  event.preventDefault();
  const numeros = [1, 2, 3, 4, 5];
  multiplicacionArreglo(numeros);
});
//Ejercicio 8

//Ejercicio 9
let numeroInicio = document.getElementById("numero-inicio");
let numeroFin = document.getElementById("numero-fin");
let btnOperaciones = document.getElementById("calcularPosiciones");
let estadoOperaciones = document.getElementById("estadoSumaPosiciones");

function operacionesArreglo(inicio, fin, arreglo) {
  if (
    isNaN(inicio) ||
    isNaN(fin) ||
    inicio < 0 ||
    fin >= arreglo.length ||
    inicio > fin
  ) {
    estadoOperaciones.innerHTML = `
      <div class="alert alert-danger" role="alert">
        Los valores ingresados no son válidos
      </div>
    `;
  } else {
    let suma = 0;
    for (let i = inicio; i <= fin; i++) {
      suma += arreglo[i];
    }

    estadoOperaciones.innerHTML = `
      <div class="alert alert-primary" role="alert">
        La suma de los números es: ${suma}
      </div>
    `;
  }
}

btnOperaciones.addEventListener("click", function (event) {
  event.preventDefault();
  let inicio = parseInt(numeroInicio.value);
  let fin = parseInt(numeroFin.value);
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  operacionesArreglo(inicio, fin, numeros);
});

//Ejercicio 9

//Ejercicio 10
let btnMayor = document.getElementById("encontrarMayor");
let estadoMayorLogica = document.getElementById("estadoMayorLogica");
let estadoMayorMath = document.getElementById("estadoMayorMath");

function mayorArreglo(arreglo) {
  let mayor = arreglo[0];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > mayor) {
      mayor = arreglo[i];
    }
  }
  estadoMayorLogica.innerHTML = `
      <div class="alert alert-primary" role="alert">
        El numero mayor es: ${mayor}, sin funciones
      </div>
    `;
}

function mayorArregloMath(arreglo) {
  let mayor = Math.max(...arreglo);
  estadoMayorMath.innerHTML = `
      <div class="alert alert-success" role="alert">
        El numero mayor es: ${mayor}, con Math.Max
      </div>
    `;
}

btnMayor.addEventListener("click", function (event) {
  event.preventDefault();
  const numeros = [1, 11, 30, 403, 10, 6, 72, 8, 94];
  mayorArreglo(numeros);
  mayorArregloMath(numeros);
  
});