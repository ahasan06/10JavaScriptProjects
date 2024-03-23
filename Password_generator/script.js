let inputSlider = document.getElementById('inputSlider');
let sliderValue = document.getElementById('sliderValue');
let passBox = document.getElementById('passBox');
let capital_letter = document.getElementById('capital_letter');
let small_letter = document.getElementById('small_letter');
let number = document.getElementById('number');
let symbol = document.getElementById('symbol');
let Passgenerator = document.getElementById('Passgenerator');
let copy = document.getElementById('copy');

// input slider
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value;
});


Passgenerator.addEventListener("click", () => {
    passBox.value = generatePass();
});


let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let allNumber = "0123456789";
let symbols = "!@#$%^~&*";


function generatePass() {
    let genPass = "";
    let allChars = "";
    allChars += small_letter.checked ? lowerCase : "";
    allChars += capital_letter.checked ? upperCase : "";
    allChars += number.checked ? allNumber : "";
    allChars += symbol.checked ? symbols : "";

    for (let i = 0; i < inputSlider.value; i++) {
        genPass += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    return genPass;
}

let copySuccessMessage = document.getElementById('copySuccessMessage');


copy.addEventListener('click', (event) => {
    event.preventDefault(); 
    navigator.clipboard.writeText(passBox.value);
    
    copySuccessMessage.style.display = 'block';
   
    setTimeout(() => {
        copySuccessMessage.style.display = 'none';
    }, 500); 
});

