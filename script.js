// hrs = 19;
let runH = document.getElementById("h")
let runM = document.getElementById("m")
let runS = document.getElementById("s")
let ampm = document.getElementById("sachin2")
let clock = () =>{
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    if(hours > 12){
        hours = hours - 12
        ampm.innerText = "PM"
    }else{
        ampm.innerText = "am"
    }
    let msg = document.getElementById("box7")
if(hours>8 && hours<12){
    msg.innerText = "Wake up good morning"
}else if(hours>12 && hours<17){
    msg.innerHTML = "have lunch, good afternoon"
}else if(hours>17 && hours<24){
    msg.innerHTML = "good evening, go club and do party"
}else{
    msg.innerText = "have dinner, good night"
}
  
    runH.innerHTML = hours;
    runM.innerHTML = minutes;
    runS.innerHTML = seconds;
}
setInterval(() =>{
    clock();
}, 1000)

let wake = document.getElementById("wakeup")
let lunch = document.getElementById("lunch")
let nap = document.getElementById("nap")
let night = document.getElementById("night")
let button = document.getElementById("box4")
let msg2 = document.getElementById("box3")
let img = document.getElementById("box8")

button.addEventListener("click", () =>{
    let time = new Date();
    let hours = time.getHours();
    if(hours === parseInt(wake.value)){
        msg2.innerHTML = "have coffee"
        img.style.backgroundImage = "url('./lunch_image.png')"; 
    }else if(hours === parseInt(lunch.value)){
        msg2.innerHTML = "have paratha in lunch"
        img.style.backgroundImage = "url('./lunch.svg')";
    }else if(hours === parseInt(nap.value)){
        msg2.innerHTML = "take some rest after lunch"
        img.style.backgroundImage = "url('./sleep.svg')";
    }else if(hours === parseInt(night.value)){
        msg2.innerHTML = "Go and sleep"
        img.style.backgroundImage = "url('./nightsleep.webp')";
    }

    let mtext = wake.options[wake.selectedIndex].textContent;
    let sachin = document.getElementById("91")
    sachin.textContent = mtext

    let mtext2 = lunch.options[lunch.selectedIndex].textContent;
    let sachin2 = document.getElementById("92")
    sachin2.textContent = mtext2

    let mtext3 = nap.options[nap.selectedIndex].textContent;
    let sachin3 = document.getElementById("93")
    sachin3.textContent = mtext3

    let mtext4 = night.options[night.selectedIndex].textContent;
    let sachin4 = document.getElementById("94")
    sachin4.textContent = mtext4
})






