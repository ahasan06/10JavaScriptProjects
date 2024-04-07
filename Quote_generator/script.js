let quoteText = document.getElementById("quote");

let quote_author = document.getElementById("quote_author");
let quoteButton = document.getElementById("quote_button");

let soundBtn = document.getElementById("soundBtn");
let copyBtn = document.getElementById("copyBtn");
let socialBtn = document.getElementById("socialBtn");


soundBtn.addEventListener("click", () => {
    let textToSpeak = quoteText.innerText + " by " + quote_author.innerText;
    let utterance = new SpeechSynthesisUtterance(textToSpeak);
    let voices = window.speechSynthesis.getVoices();
    console.log(voices);
    let femaleVoice = voices.find(voice => voice.name === 'Google हिन्दी');
    if (femaleVoice) {
        utterance.voice = femaleVoice;
    }
    speechSynthesis.speak(utterance);
})

copyBtn.addEventListener("click", () => {
    let textContent = `${quoteText.innerText}
by ${quote_author.innerText}`;
    navigator.clipboard.writeText(textContent);
})


quoteButton.addEventListener("click", () => {
    quoteButton.innerText = "Loading...";

    fetch('https://type.fit/api/quotes')
        .then(res => res.json())
        .then(quotes => {
            // Select a random quote from the array
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const randomQuote = quotes[randomIndex];

            // Update the quoteText and quote_author elements with the selected quote
            quoteText.innerText = randomQuote.text;
            quote_author.innerText = randomQuote.author.split(' ').slice(0, -1).join(' ') || "Unknown";


            // Restore the button text
            quoteButton.innerText = "New Quote";
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            quoteButton.innerText = "New Quote";
        });
});
