setInterval(()=>{
    let heures = document.getElementById('heures')
    let minutes = document.getElementById('minutes')
    let secondes = document.getElementById('secondes')


    let hh = document.getElementById('hh')
    let mm = document.getElementById('mm')
    let ss = document.getElementById('ss')

    let h_dot = document.querySelector('.h_dot')
    let min_dot = document.querySelector('.min_dot')
    let sec_dot = document.querySelector('.sec_dot')

    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    // ZERO POUR LES NOMBRE EN DESSOU DE 10
    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    heures.innerHTML = h + "<br><span>H</span>";
    minutes.innerHTML = m + "<br><span>Min</span>";
    secondes.innerHTML = s + "<br><span>Sec</span>";
    // LES POINTS QUI SE DEPLACENT
    hh.style.strokeDashoffset = 440 - (440 * h) / 24
    mm.style.strokeDashoffset = 440 - (440 * m) / 60
    ss.style.strokeDashoffset = 440 - (440 * s) / 60
    // INVERTION DES POINTS
    h_dot.style.transform = `rotate(${h * 15}deg)`;
    min_dot.style.transform = `rotate(${m * 6}deg)`;
    sec_dot.style.transform = `rotate(${s * 6}deg)`;
    
  })