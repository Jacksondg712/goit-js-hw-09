// all modules
import Notiflix from 'notiflix';

// one by one
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Block } from 'notiflix/build/notiflix-block-aio';

const inputFirst = document.querySelector(".inputFirst");
const inputStep = document.querySelector(".inputStep");
const inputAmount = document.querySelector(".inputAmount");
const btonPromise = document.querySelector(".btonPromise");

var Fisrt, Step, Amount;
let timerId = null;
inputFirst.addEventListener("blur", (first) =>{
  const newFirst = first.currentTarget.value;
  Fisrt = newFirst;
  console.log(Fisrt);
});

inputStep.addEventListener("blur", (step) =>{
  const newStep = step.currentTarget.value;
  Step = newStep;
  console.log(Step);

});

inputAmount.addEventListener("blur", (amount) =>{
  const newAmount = amount.currentTarget.value;
  Amount = newAmount;
  console.log(Amount);
});
// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     Fulfill
//   } else {
//     Reject
//   }
// }

// let suma = (Fisrt+Step);
// console.log(suma);

btonPromise.addEventListener("click", (event) =>{
  event.preventDefault();
  let sumatime = (parseInt(Step)+parseInt(Fisrt));
  console.log(sumatime);
  let suma = sumatime;
  const shouldResolve = Math.random() > 0.3;

  const promiseFirst = new Promise((resolve, reject) =>{
    setTimeout(() =>{
      if(shouldResolve){
        resolve(`${Fisrt}`);
      }else{
        reject("Error! Error passed to reject function");
      }
    }, Fisrt);
  });

  const promiseSeconds = new Promise((resolve, reject) => {
    for(let i = 1; i < Amount;){
      setTimeout(() => {
          if(shouldResolve){
            resolve(Notiflix.Notify.success(`✅ Fulfilled promise ${i} in ${sumatime}ms`));sumatime += parseInt(Step);
          }else{
            reject("Error! Error passed to reject function");
          }

        
          // suma += parseInt(Step);
          
      }, suma);
      i += 1;
      suma += parseInt(Step);
      // sumatime += parseInt(Step);
    }
  clearInterval(timerId);
  });


  // function createPromise(position, delay) {
  //   const shouldResolve = Math.random() > 0.3;
  //     const position = new Promise((amount, reject) => {
  //     if (shouldResolve) {
  //       amount(Amount);
  //     } else {
  //       reject("Error! Error passed to reject function");
  //     }
  //   });

  //     delay = new Promise((emi, reject) =>{
  //     if (shouldResolve) {
  //       emi(Fisrt + Step);
  //     } else {
  //       reject("Error! Error passed to reject function");
  //     }
  //   });

  promiseFirst
  .then((value) => {
    console.log(`✅ Fulfilled promise 1 in ${Fisrt}ms`);
    Notiflix.Notify.success(`✅ Fulfilled promise 1 in ${Fisrt}ms`);
  })
  .catch((error) => {
    console.log(error);
    Notiflix.Notify.success(error);
  });


  promiseSeconds
  .then((value) => {
    console.log(value);
    Notiflix.Notify.success(value);

  })
  .catch((error) => {
    console.log(error);
    Notiflix.Notify.success(error);
  });
  
  
});



// Notiflix.Notify.success('Sol lucet omnibus');

// Notiflix.Notify.failure('Qui timide rogat docet negare');

// Notiflix.Notify.warning('Memento te hominem esse');

// Notiflix.Notify.info('Cogito ergo sum');


