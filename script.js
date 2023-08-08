// let listaDeCornos = ["Nicolai", "Lucas", "Davi"]

// console.log(listaDeCornos)
// console.table(listaDeCornos)
// console.log(listaDeCornos[1])

// listaDeCornos[1] = "Lucas Marques"

// console.table(listaDeCornos)

// let cars = {
//   itemName: 'Fiesta',
//   price: 40.000,
//   color: 'blue',
//   available: true
// }

// cars.color = "red"
// console.table(cars)

// function executarName(name, age) {
//   console.log("Meu nome é", name, "e tenho", age)
// }

// executarName('Jefferson', '20')

// function calcSum(number1, number2) {
//   console.log(number1 + number2)
// }

// calcSum(10, 20)

// function imc(valorPeso, valorAltura) {
//   const peso = valorPeso;
//   const altura = valorAltura;

//   const resultImc = peso / (altura * altura);
//   console.log(`Seu imc é ${resultImc}`);
// }

// imc(76, 165);

// let listaDeCornos = ["Nicolai", "Lucas", "Davi"]

// for (let corno of listaDeCornos) {
//   console.log(corno)
// }

// const cars = {
//   itemName: 'Fiesta',
//   price: 40.000,
//   color: 'blue',
//   available: true
// }

// for (let car in cars) {
//   console.log(cars[car])
// }

const watchDocument = document.querySelector("#watch");
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

function init() {
  if (watchDocument.innerHTML === "00:00:00") {
    watch();
    interval = setInterval(watch, 1000);
  }
}

const pause = () => {
  clearInterval(interval);
};

const clearAll = () => {
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  watchDocument.innerHTML = "00:00:00";
};

const digitZero = (digit) => {
  if (digit < 10) {
    return `0${digit}`;
  } else {
    return digit;
  }
};

function watch() {
  seconds++;

  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  watchDocument.innerHTML =
    digitZero(hours) + ":" + digitZero(minutes) + ":" + digitZero(seconds);
}
