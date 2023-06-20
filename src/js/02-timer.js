
const falt = document.querySelector("#datetime-picker");
const btonStart = document.querySelector(".btonStart");
const spanDays = document.querySelector(".valueDays");
const spanHours = document.querySelector(".valueHours");
const spanMinutes = document.querySelector(".valueMinutes");
const spanSeconds = document.querySelector(".valueSeconds");

btonStart.disabled = true;
var timeAct, 
timeAfter, 
objAct, 
objAfter,
timeId;

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

    
  

  
  
//   function contador(objAfter){
//     spanDays.innerHTML = objetoResta.days;
//     spanHours.innerHTML = objetoResta.hours;
//     spanMinutes.innerHTML = objetoResta.minutes;
//     spanSeconds.innerHTML = objetoResta.seconds;

//     setTimeout(function(){
//         contador(objAfter);
//     },1000);
//   }



  

const fp = flatpickr(falt, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onOpen(fp){
        // console.log(fp[0]);
        timeAct = JSON.stringify(convertMs(fp[0]));
        objAct = JSON.parse(timeAct);
        console.log(objAct);
    },
    onClose(fp) {
        timeAfter = JSON.stringify(convertMs(fp[0]));
        objAfter = JSON.parse(timeAfter);
        console.log(objAfter);
        

      if(timeAct > timeAfter ){
        window.alert("Please choose a date in the future");
        location.reload();
        }
        else{
            btonStart.disabled = null;
            btonStart.addEventListener("click", () => {
                var objetoResta = {};

            for (var clave in objAfter){
                if (objAfter.hasOwnProperty(clave) && objAct.hasOwnProperty(clave)) {
                    objetoResta[clave] = objAfter[clave] - objAct[clave];
                    }
            }
                
                    spanDays.innerHTML =    objetoResta.days;
                    spanHours.innerHTML =   objetoResta.hours;
                    spanMinutes.innerHTML = objetoResta.minutes;
                    spanSeconds.innerHTML = objetoResta.seconds;
                    let counterDays = objetoResta.days;
                    let counterHours = (objetoResta.hours * -1); 
                    let counterMinutes = objetoResta.minutes; 
                    let counterSecond = (objetoResta.seconds * -1);

                  function contador(){
                    console.log(counterDays, counterHours, counterMinutes, counterSecond);

                    counterSecond--;
                    spanSeconds.innerHTML = counterSecond;
                    spanMinutes.innerHTML = counterMinutes - 1;
                    if(counterSecond == 0){
                        counterSecond = 60;
                        counterMinutes = counterMinutes - 1;
                        spanMinutes.innerHTML = counterMinutes;
                        if(counterMinutes == 0){
                            counterMinutes = 0;
                            counterHours--;
                            spanDays.innerHTML = "00";
                                    spanHours.innerHTML ="00";
                                    spanMinutes.innerHTML = "00";
                                    spanSeconds.innerHTML = "00";
                                    clearInterval(timeId);
                                    location.reload();
                          
                        }
                    }
                  }

                  timeId = setInterval(contador, 1000);
            },);
        }   
    }
});