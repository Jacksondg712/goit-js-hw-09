const btonStart = document.querySelector(".btonStart");
const btonStop = document.querySelector(".btonStop");
 let timerId = null;

 function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};



btonStart.addEventListener("click", () =>{
    timerId = setInterval(() =>{
        document.body.style.backgroundColor = getRandomHexColor();
    }, 3000);

    btonStart.disabled = true;
    btonStop.disabled = null;
    
});

btonStop.addEventListener("click", () =>{
    clearInterval(timerId);

    btonStop.disabled = true;
    btonStart.disabled = null;

});

