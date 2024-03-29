let quoteText = document.getElementById("quote");

let quote_author = document.getElementById("quote_author");
let quoteButton = document.getElementById("quote_button");

let soundBtn = document.getElementById("soundBtn");
let copyBtn = document.getElementById("copyBtn");
let socialBtn = document.getElementById("socialBtn");

function randomQuote() {

    quoteButton.innerText = "Loding..."

    fetch('https://api.quotable.io/random')
        .then(res => res.json())
        .then(result => {
            console.log(result);
            quoteText.innerText = result.content
            quote_author.innerText = result.author
            quoteButton.innerText = "New Qoute"
        });
}


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

socialBtn.addEventListener("click", () => {

    let textToShare = `${quoteText.innerText} by ${quote_author.innerText}`;
    // Encode the text for URL
    let encodedText = encodeURIComponent(textToShare);
    let facebookShareUrl = `https://www.facebook.com/dialog/share?app_id=YourAppId&display=popup&quote=${encodedText}&href=${window.location.href}`;
    window.open(facebookShareUrl, '_blank');
});

quoteButton.addEventListener("click", randomQuote);