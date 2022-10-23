setInterval(setClock,1000);

const hourHand = document.querySelector('[data-hour-hand]'),
    minuteHand = document.querySelector('[data-minute-hand]'),
    sekundHand = document.querySelector('[data-sekund-hand]'),
    deg = 6,
    soundClock = document.getElementById('sound')

function setClock() {
    const currentData = new Date()
    const secondTime = currentData.getSeconds()* deg 
    const minuteTime = currentData.getMinutes() * deg
    const hourTime = currentData.getHours() *30


    // setRotation(sekundHand, secondTime)
    // setRotation(minuteHand, minuteTime)
    // setRotation(hourHand, hourTime)
    hourHand.style.transform = `rotateZ(${(hourTime) + (minuteTime/12)}deg)`;
    minuteHand.style.transform = `rotateZ(${minuteTime}deg)`;
    sekundHand.style.transform = `rotateZ(${secondTime}deg)`
    soundClock.play(); 
   

}
// function setRotation(element, rotationTime){
//     element.style.setProperty('rotation', rotationTime * 360)
// }
setClock()
function bos() {
    
}