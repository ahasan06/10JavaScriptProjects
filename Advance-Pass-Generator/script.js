let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById('passBox');
let capital_letter = document.getElementById("capital_letter");
let small_letter = document.getElementById("small_letter");
let number = document.getElementById("number");
let symbol = document.getElementById("symbol");

let nameBox = document.getElementById("nameBox");
let digitBox = document.getElementById("digitBox");

let copy = document.getElementById("copy");
let Passgenerator = document.getElementById("Passgenerator");

//Define letters symbols

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let allNumber = "0123456789";
let symbols = "!@#$%^~&*";



// input silder 
sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value;
})

Passgenerator.addEventListener("click", () => {
    passBox.value = generatePass();
})

function generatePass() {
    let passgen = "";
    let allChars = "";
    let fixPass = "";
    let password = "";
    allChars += capital_letter.checked ? upperCase : "";
    allChars += small_letter.checked ? lowerCase : "";
    allChars += number.checked ? allNumber : "";
    allChars += symbol.checked ? symbols : "";
    
    fixPass += nameBox ? nameBox.value : "";
    fixPass += digitBox ? digitBox.value : "";

    let length = parseInt(inputSlider.value) - fixPass.length;
    let passgenlen =length/2;

    for (let i = 0; i <length; i++) {
        passgen += allChars.charAt(Math.floor(Math.random() * allChars.length));
       
    }
    password = passgen.slice(0, passgenlen) + fixPass + passgen.slice(-passgenlen);
    copy.style.backgroundColor ="blue"
    return password
}


// toast js
var toast = document.getElementById("copySuccessMessage");

// Function to handle the click event
function showToast() {
    toast.style.display = "block";
    copy.style.backgroundColor ="red"
    setTimeout(function() {
        toast.style.display = "none";
  
    },1000);
}

copy.addEventListener("click", showToast);

// copy passWord

let copySuccessMessage = document.getElementById('copySuccessMessage');
copy.addEventListener("click",(e)=>{
    navigator.clipboard.writeText(passBox.value);
})