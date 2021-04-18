//ANNIMATION DE DEFILEMENT
//SELEECTION DU H1 DANS LE HEADER SOUS LA NAV
const Defilement = document.getElementById("TitreDeDefilement");

new Typewriter(Defilement, {
    loop: true,
    deleteSpeed: 100
})
.changeDelay(5)
.typeString("Bonjour et Bienvenu")
.pauseFor(700)
.deleteChars(19)

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
