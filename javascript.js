////////////////Kleurplaat stukje javascript//////////////////
// Selecteer het SVG-element en spreekt hem aan, bron van deze functie is Lisette Pool
let allevakjes = document.querySelectorAll("svg.kleurplaat > *")


//Spreek alle ids aan en geeft hem een naam
const kiesOranje = document.getElementById("kiesOranje");
const kiesRoze = document.getElementById("kiesRoze");
const kiesYellow = document.getElementById("kiesYellow");
const kiesGreen = document.getElementById("kiesGreen");
const kiesAqua = document.getElementById("kiesAqua");

//de actieve kleur word aangeroepen
let actieveKleur = "yellow";

// Alle kleuren worden op geklikt en uitgevoerd 
kiesOranje.addEventListener("click", () => {
    actieveKleur = "orange";
    console.log("oranje geselecteerd");
})

kiesRoze.addEventListener("click", () => {
    actieveKleur = "pink";
    console.log("roze geselecteerd");
})

kiesYellow.addEventListener("click", () => {
    actieveKleur = "yellow";
    console.log("yellow geselecteerd");
})

kiesGreen.addEventListener("click", () => {
    actieveKleur = "green";
    console.log("green geselecteerd");
})

kiesAqua.addEventListener("click", () => {
    actieveKleur = "aqua";
    console.log("aqua geselecteerd");
})


// Vakje inkleuren, Dit voegt een event listener toe aan elk vakje, zodat wanneer erop wordt geklikt, de functie changeColor(vakje) wordt uitgevoerd.
allevakjes.forEach((vakje) => {
    console.log(vakje)
    vakje.addEventListener("click", () => {
        changeColor(vakje);
    });
});

//het vak helemaal inkleuren en opslaan in de variable
function changeColor(vak) {
    console.log("changeColor Functie: " + vak)
    console.log(actieveKleur);
    vak.setAttribute('fill', actieveKleur);
}


////////////////Timer stukje javascript//////////////////
// Timer openen, bron is Sandra Strijker
let secondesVoorbij = 120; 
let timer = setInterval(tijdAflopen, 1000); // 1000 milisecondes dus 1 sec
const startTimer = document.querySelector("#timerVeld"); // de resterende tijd weer te geven.

startTimer.textContent = secondesVoorbij; //begin tijd

//zijn er nog seconde over en de actie als er geen secondes over zijn
function tijdAflopen() {
    if (secondesVoorbij > 0) { // controleert of er nog seconden over zijn 
        startTimer.textContent = secondesVoorbij; // het aantal seconden dat is verstreken
        secondesVoorbij--;  // aantal seconden dat is verstreken wordt met 1 verminderd

    }

    else {
        clearInterval(timer); // als de tijd is gestopt en word aangegeven met tekst
        startTimer.textContent = 'De tijd is over!';
    }

}
//Simulatie uitvoeren, waardoor de timer met één seconde wordt verlaagd, of de timer stopt als deze al op 0 staat
tijdAflopen();


////////////////Audio stukje javascript//////////////////
//audio stukje dat je hem aanspreekt, de bron van deze functie is ChatGPT
const audio = document.getElementById("audio");

//dat het gaat afspelen op de button
function playAudio() {
    audio.play();
}
//dat je de audio kan stop zetten
function pauseAudio() {
    audio.pause();
}

