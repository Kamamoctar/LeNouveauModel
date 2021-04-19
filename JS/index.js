//ANNIMATION DE DEFILEMENT
//SELEECTION DU H1 DANS LE HEADER SOUS LA NAV
const Defilement = document.getElementById("TitreDeDefilement");

new Typewriter(Defilement, {
    loop: true,
    deleteSpeed: 150
})
.changeDelay(5)
.typeString("Bonjour et Bienvenu")
.pauseFor(700)
.deleteChars(19)

.typeString('Ce site est encore en construction')
.pauseFor(600)
.deleteChars(34)

.typeString('consultez sa version ancienne <a href="https://kamamoctar.github.io/LeNouveauModel/CV-main/" target="_blank">ici</a>')
.pauseFor(3000)
.deleteChars(116)

.typeString('Je suis ')
.pauseFor(500)

.typeString('NAMADOU Moctar K.')
.pauseFor(1000)
.deleteChars(17)

.typeString('un Biblio<strong style="color:white">TECH</strong>aire')
.pauseFor(1000)
.deleteChars(17)

.typeString('un Archiviste')
.pauseFor(1000)
.deleteChars(13)

.typeString('un Information Manager')
.pauseFor(2000)
.deleteChars(22)
.start()

//FONCTION DU SON DU NEON HOVER
