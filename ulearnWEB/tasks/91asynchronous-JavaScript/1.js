/**
 * 1. Напиши функцию createPromise, которая будет возвращать промис
 * */

function createPromise () {
    return new Promise((resolve, reject) => {
        if(valid) { resolve() } else { reject(errors) }
        });
}

/**
 * 2. Напиши функцию createResolvedPromise, которая будет возвращать промис, который успешно выполнен (fulfilled)
 * */

function createResolvedPromise () {
    let promise = new Promise(function(resolve, reject) {
        resolve();
      });
    return promise.then(
        result => {
        },
        error => {
        }
    );
}

/**
 * 3. Напиши функцию createResolvedPromiseWithData, которая будет возвращать промис, который успешно выполнен
 * (fulfilled) и возвращать при резолве строчку "Готово!"
 * */

function createResolvedPromiseWithData () {
    let promise = new Promise(function(resolve, reject) {
        resolve('Готово!');
      });
    return promise.then(
        result => {
        },
        error => {
        }
    );
}

/**
 * 4. Напиши функцию createRejectedPromise, которая будет возвращать промис, который будет отклонен (rejected)
 * */

function createRejectedPromise () {
    let promise = new Promise(function(resolve, reject) {
        reject();
      });
    return promise.then(
        result => {
        },
        error => {
        }
    );
}

/**
 * 5. Напиши функцию createRejectedPromiseWithError, которая будет возвращать промис, который будет отклонен
 * (rejected) и отклоненыый промис должен возвращать объект ошибки с текстом "Что-то пошло не так"
 * */

function createRejectedPromiseWithError () {
    let promise = new Promise(function(resolve, reject) {
        reject(new Error("Что-то пошло не так"));
      });
    return promise.then(
        result => {
        },
        error => {
        }
    );
}

/**
 * 6. Напиши функцию fulfilledOrNotFulfilled, которая принимает на вход boolean аргумент и возвращает промис.
 * Если аргумент true, то промис должен быть выполнен, иначе — отклонен.
 * */

function fulfilledOrNotFulfilled (shouldBeResolve) {
    let promise = new Promise(function(resolve, reject) {
        if(shouldBeResolve) { resolve(); }
        else { reject(); }
      });
    return promise.then(
        result => {
        },
        error => {
        }
    );
}

/**
 * 7. Создай функцию timer, которая возвращает промис, который выполняется через 3 секунды.
 * */

function timer () {
    // Создаётся объект promise
let promise = new Promise((resolve, reject) => {

    setTimeout(() => {
      // переведёт промис в состояние fulfilled с результатом "result"
      resolve();
    }, 3000);
  
  });
  
  return promise
    .then(
      result => {
      },
      error => {
      }
    );
}

module.exports = {
    createPromise,
    createResolvedPromise,
    createResolvedPromiseWithData,
    createRejectedPromise,
    createRejectedPromiseWithError,
    fulfilledOrNotFulfilled,
    timer,
};


