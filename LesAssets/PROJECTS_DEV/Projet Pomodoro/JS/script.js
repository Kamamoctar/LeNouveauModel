const affichageTravail = document.querySelector('.affichageT')
const affichagePause = document.querySelector('.affichageP')
const btnGo = document.querySelector('.b1')
const btnPause = document.querySelector('.b2')
const btnReset = document.querySelector('.b3')
const cycles = document.querySelector('h2')

let checkInterval = false
let tempsInit = 1800
let tempsDeRepos = 300
let pause = false
let nbDecycles = 0

cycles.innerText = `Nombre de cycles ${nbDecycles}`;

affichageTravail.innerText = `${Math.trunc(tempsInit/60)} : ${(tempsInit % 60 < 10) ? `0${tempsInit % 60}` : tempsInit % 60}`;
affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;


let actualisationAffTra = affichageTravail.innerText = `${Math.trunc(tempsInit/60)} : ${(tempsInit % 60 < 10) ? `0${tempsInit % 60}` : tempsInit % 60}`;
btnGo.addEventListener('click', () => {

    if(checkInterval === false){
        checkInterval = true;
    

    tempsInit--;
    affichageTravail.innerText = `${Math.trunc(tempsInit/60)} : ${(tempsInit % 60 < 10) ? `0${tempsInit % 60}` : tempsInit % 60}`;

    let timer = setInterval(() => {

        if (pause === false && tempsInit > 0) {
            tempsInit--;
            affichageTravail.innerText = `${Math.trunc(tempsInit/60)} : ${(tempsInit % 60 < 10) ? `0${tempsInit % 60}` : tempsInit % 60}`;

        } else if (pause === false && tempsDeRepos === 0 && tempsInit ===0) {
            tempsInit = 1800;
            tempsDeRepos = 300;
            nbDecycles++;
            cycles.innerText = `Nombre de cycles ${nbDecycles}`;
            affichageTravail.innerText = `${Math.trunc(tempsInit/60)} : ${(tempsInit % 60 < 10) ? `0${tempsInit % 60}` : tempsInit % 60}`;
            affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
        } 
        else if (pause === false && tempsInit === 0) {
            tempsDeRepos--
            affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
        }

    }, 1000)
// LE RESTE
    btnReset.addEventListener('click', ()=> {
        clearInterval(timer)
        checkInterval = false
        tempsInit = 1800
        tempsDeRepos= 300
        affichageTravail.innerText = `${Math.trunc(tempsInit/60)} : ${(tempsInit % 60 < 10) ? `0${tempsInit % 60}` : tempsInit % 60}`;
    affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
    })
} else {
    return;
}



})

btnPause.addEventListener('click', () => {
    if(pause === false){
        btnPause.innerText = "Play"
    } else if (pause === true){
        btnPause.innerText = "Pause"
    }
    pause = !pause
})