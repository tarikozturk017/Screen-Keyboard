let text = "";
let isUp = false;
let alph = "abcdefghijklmnopqrstuvwxyz";

function generateAlhabetics() {
    let alphaButtons = alph.split("").map(letter => 
        `
            <button
                class="btn btn-lg btn-dark m-2"
                id="` + letter + `"
                onClick="updateText('` + letter + `')"
            >
            ` + letter + `
            </button>  
        `).join("");
    document.getElementById("alphabetics").innerHTML = alphaButtons;
}

function generateNumerics() {
    let numButtons = "0123456789".split("").map(number => 
        `
            <button
                class="btn btn-lg btn-dark m-2"
                id="` + number + `"
                onClick="updateText('` + number + `')"
            >
            ` + number + `
            </button>
        `).join("");
    document.getElementById("numerics").innerHTML = numButtons;
}

function generateNonAlphaNums() {
    let nonAlphaNumButtons = ".,!?=)(/&%+^';:<#$½{}[]*`_@~| ".split("").map(symbol => 
        `
            <button
                class="btn btn-lg btn-dark m-2"
                id="` + symbol + `"
                onClick="updateText('` + symbol + `')"
            >
            ` + symbol + `
            </button>
        `).join("");
    document.getElementById("nonalphanums").innerHTML = nonAlphaNumButtons;
}

function updateText(input) {
    text += input;
    document.getElementById("text").innerHTML = text + "_";
}

function deleteLast() {
    text = text.substring(0, text.length - 1);
    document.getElementById("text").innerHTML = text + "_";
}

function deleteAll() {
    text = "";
    document.getElementById("text").innerHTML = text + "_";
}

function convertUpLow() {
    if (isUp) {
        alph = alph.toLowerCase();
        isUp = false;
        document.getElementById("uplow").innerHTML = "Show Uppercase Letters";
    } else {
        alph = alph.toUpperCase();
        isUp = true;
        document.getElementById("uplow").innerHTML = "Show Lowercase Letters";
    }
    generateAlhabetics();
}

generateAlhabetics();
generateNumerics();
generateNonAlphaNums();
