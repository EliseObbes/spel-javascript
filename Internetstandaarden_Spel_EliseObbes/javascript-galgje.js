////////////////Galgje stukje javascript//////////////////
// Worden aangesproken voor het spel, deze code heb ik met behulp van ChatGPT geschreven.
const words = ['leeuw', 'schildpad','slang','vogel'];

// Alle Id's aanspreken en noemen bij naam
const woordContainer = document.getElementById('woordContainer');
const gokInput = document.getElementById('gokInput');
const gokButton = document.getElementById('gokButton');
const bericht = document.getElementById('bericht');
let pogingen = document.getElementById('laatstePogingen');


// Select een wilkeurig random woord uit de const words bovenin het bestand
let selectedWord = words[Math.floor(Math.random() * words.length)];

// Maakt nieuwe variable aan en [] zijn om te controleren welke letters al geraden 
// zijn en om de voortgang van het spel te behouden
let guessedLetters = []; 

// Hoeveel keer er mag geraden worden, hoeveel pogingen de gebruiker heeft
let laatstePogingen = 10;


// Functie voor het geraden woord en niet geraden woord word een lagere score, als de letter al in de array 
// guessedletter staat dan word de letter toegevoegd aan wordDisplay.
function displayWord() {
    let wordDisplay = '';
    for (let letter of selectedWord) {
        if (guessedLetters.includes(letter)) {
            wordDisplay += letter;  //als de letter niet is geraden word er een lagere score toegvoegd.
        } else {
            wordDisplay += '_';  // spatie toegevoegd voor betere leesbaarheid
        }
        wordDisplay += ' ';  
    }
    woordContainer.textContent = wordDisplay; //het woord herkend door word en weergegeven
}

// Functie van de koppeling met laatstePogingen
function handleGuess() {
    if (laatstePogingen > 0) {  //Controleert of het aantal resterende pogingen (laatstePogingen) groter is dan nul. ja? dan gaat het spel door met het verwerken 
        const guess = gokInput.value.toLowerCase();
        if (guess && guessedLetters.indexOf(guess) === -1) {  //Controleert of de gok geldig is (en niet leeg) of deze niet al eerder is geraden. ja? dan gaat het spel door met het verwerken 
            displayWord();  //woord weer te geven
            if (!selectedWord.includes(guess)) {
                bericht.textContent = 'Verkeerde letter!';
                laatstePogingen--; 
                pogingen.textContent = laatstePogingen;
                if (laatstePogingen === 0) {
                    bericht.textContent = `Goed geprobeerd maar je hebt helaas geen buurten meer. Je woord was "${selectedWord}".`;
                    gokInput.disabled = true;
                    gokButton.disabled = true;
                }
            } else if (!woordContainer.textContent.includes('_')) {  // als het woord compleet is dan komt dit stukje tekst 
                bericht.textContent = 'Gefeliciteerd! Je hebt gewonnen!';
                gokInput.disabled = true;
                gokButton.disabled = true;
            }
        } else {
            bericht.textContent = 'Dat is geen letter, probeer opnieuw!'; // als een letter al is toegvoegd of er word een cijfer in getoetst dan komt dit stukje tekst
        }
        gokInput.value = '';
    }
} 

// De knop word op gedrukt en dan word de gok verwerkt
gokButton.addEventListener('click', handleGuess);

// Het geraden woord komt tevoorschijn
displayWord();