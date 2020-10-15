function f1() {
  let num1 = document.getElementById("input1").value;
  num1 = parseInt(num1);
  let num2 = document.getElementById("input2").value;
  num2 = parseInt(num2);
  let result = (num1 + num2);
  document.getElementById("result").innerHTML = result;
}

push.outerHTML = '<div class="outerHTML">Thanks!</div>';

push2.insertAdjacentHTML('beforeBegin', 'Tnks!');
push2.insertAdjacentHTML('afterBegin', 'Tnks! ');
push2.insertAdjacentHTML('afterEnd', 'Tnks!');
push2.insertAdjacentHTML('beforeEnd', ' Tnks!');


//! угадай число

let randomNum = Math.round((Math.random() * 10));
console.log(randomNum)
let result3 = document.getElementById('result3');
function guess() {
  let num1 = document.getElementById("input5").value;
  num1 = parseInt(num1);

  if (num1 < randomNum) {
    result3.innerHTML = 'Загаданное число больше!'
  }
  else if (num1 == randomNum) {
    result3.innerHTML = 'В яблОЧКО!'
  }
  else {
    result3.innerHTML = 'Загаданное число меньше!'
  }
}


//! Цикл

let cycle = document.getElementById('result4');
function f3() {
  for (let i = 0; i < 100; i++) {
    console.log(i);
    cycle.innerHTML += i + ' ';
    /* cycle.outerHTML = '<div class="outerHTML"></div>' */

  }
}