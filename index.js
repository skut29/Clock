//CLOCK
function clock () {

    let date = new Date();
    let sec = date.getSeconds();
    let min = date.getMinutes();
    let hour = date.getHours();
    let periot = 'AM';

sec = sec < 10 ? '0'+ sec : sec;
min = min < 10 ? '0'+ min : min;
//hour = hour > 12 ? hour - 12 : hour;
periot = hour > 11 && hour < 24 ? 'PM' : periot;

let time = `${hour}:${min}:${sec}${periot}`;
document.getElementById('clock').innerHTML = time;
setTimeout(clock, 1000);
}

clock()

//bg
function bgChange () {
document.getElementsByTagName("body").setAttribute("background", "bg\alena-aenami-dreamer-1k.jpg");
}






