const startBtn = document.querySelector("button")
const h2 = document.querySelector("h2")
let counter = 5
h2.innerHTML = counter
let colourSwitchInterval;
let interval;


const beep = () => {
    const audio = new Audio("./LateNightHouse.mp3")
    audio.volume = 1
    audio.play()
}

function setColor() {
    let x = document.body;
    x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
}

const timer = () => {
    counter--
    h2.innerHTML = counter;
    if (counter === 0) {
        setColor()
        beep()
        clearInterval(interval, colourSwitchInterval)
    }
}

function stopColor() {
    clearInterval(colourSwitchInterval);
}

startBtn.addEventListener("click", () => {
    interval = setInterval(timer, 1000)
    // colourSwitchInterval = setInterval(stopColor, 1000)
})