
setInterval(()=>{

    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    let hrDot = document.querySelector('.hrDot');
    let minDot = document.querySelector('.minDot');
    let secDot = document.querySelector('.secDot');
    // console.log(hrDot, minDot, secDot);

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ? "PM" : "AM";

    //Convert 24hr clock into 12hr clock
    if (h > 12) {
        h = h - 12;
    }

    //add zero before single digit

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h + "<br> <span> Hours </span>";
    minutes.innerHTML = m + "<br> <span> Minutes </span>";
    seconds.innerHTML = s + "<br> <span> Seconds </span>";
    ampm.innerHTML = am;

    hh.style.strokeDashoffset = 440 - (440*h) / 12;
    mm.style.strokeDashoffset = 440 - (440*m) / 60;
    ss.style.strokeDashoffset = 440 - (440*s) / 60;

    hrDot.style.transform = `rotate(${h*30}deg)`;
    minDot.style.transform = `rotate(${m*6}deg)`;
    secDot.style.transform = `rotate(${s*6}deg)`;

})




