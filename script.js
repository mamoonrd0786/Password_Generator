let inputslider = document.getElementById("inputSlider");
let slidervalue = document.getElementById("sliderValue");
let passbox = document.getElementById("passBox");
let lowerCase = document.getElementById("lowercase");
let upperCase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genbtn = document.getElementById("genBtn");
let copyicon = document.getElementById("copyIcon");


// Showing input slider value
slidervalue.textContent = inputslider.value;
inputslider.addEventListener('input', () => {
    slidervalue.textContent = inputslider.value;
});

genbtn.addEventListener('click', () => {
    passbox.value = generatePassword();
});

// Function to Generate Password

let lowerchars = "abcdefghijklmnopqrstuvwxyz";
let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumbers = "0123456789";
let allsymbols = "~!@#$%^&*";
function generatePassword() {
    let genPassword = "";
    let allChars = "";
    allChars += lowerCase.checked ? lowerchars : "";
    allChars += upperCase.checked ? upperchars : "";
    allChars += numbers.checked ? allnumbers : "";
    allChars += symbols.checked ? allsymbols : "";

    if (allChars == "" || allChars == 0) {
        return genPassword;
    }
    for (let i = 1; i < inputslider.value; i++) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    return genPassword;

}

// Copy Password Function
copyicon.addEventListener('click', ()=>{
    if (passbox.value != "" || passbox.value.length >= 1) {
        navigator.clipboard.writeText(passbox.value);
        copyicon.title = "Password Copied";
        copyicon.innerText = "check";
    }
    
    setTimeout(()=>{
        copyicon.innerHTML = "content-copy";
        copyicon.title = "";

    }, 3000);
});