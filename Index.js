// Primeira 

function someFun(params, callback) {

  callback(params.someProperty)

  return 1

}

// Segunda 

function someFn(number) {

  const returnFunction = (value) => {

    switch (value) {

      case 3:

        return 4

      case 1:

        return 5

      case 5:

        return 10

    }

  }

  return returnFunction

}

// Terceira 

function calculator(n1, n2) {

  return callback => callback(n1, n2)

}

// Quarta 

/**

 * No console aparecera nessa ordem:

 * 4

 * 1

 * 5

 * 1

 */

// Quinta 

function tabuada(num) {

  for (let i = 1; i <= 10; i++) {

    console.log(`${num} X ${i} = ${num * i}`)

  }

}
