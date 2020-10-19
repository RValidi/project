'use strict';

const options = {
  name: 'test',
  width: 1024,
  height: 768,
  colors: {
    border: 'black',
    bg: 'red'
  },
  myFirstMethod: function() {
    console.log('Мой первый метод в объекте!')
  }
};

options.myFirstMethod();

delete options.height;

const {border, bg} = options.colors;

console.log(border);

for (let key in options) {

  if (typeof (options[key]) === 'object') {

    for (let i in options[key]) {

      console.log(`свойство ${i} имеет значение ${options[key][i]}`)

    }

  } else {

    console.log(`свойство ${key} имеет значение ${options[key]}`)

  }

}

console.log(Object.keys(options).length);
//как бы превращает объект в массив и узнает длину
