var textFinal;
let userInput;
var spanTextInput;

function showText() {
    let buttonEncrypt  = document.getElementById('encrypt');
    let buttonDecrypt  = document.getElementById('decrypt');
    var buttonCopy = document.querySelector('.copySection');

    userInput =  document.getElementById('idInput');
    textFinal = document.getElementById('text');
    spanTextInput = document.getElementById('idSpanTextInput');
    
    buttonEncrypt.addEventListener('click', encrypt);
    buttonDecrypt.addEventListener('click', decrypt);
    buttonCopy.addEventListener('click', copy);
}

function hide() {
    document.getElementById('image').style.display = "none";    
    document.getElementById('textNotFind').style.display = "none";
}

function show() {
    document.getElementById('idOutputText').style.display = 'block';
    document.getElementById('idTextInput2').style.display = 'block';
    document.querySelector('.copyButton').style.display = 'block';
    userInput.style.display = "none";
    userInput = userInput.value;
    hide();
}

function encrypt() {
    let textEncrypt = [];
    let c=0;

    show();

    for(let i=0; i<userInput.length; i++) {
        if (userInput[i] == 'e') {textEncrypt[i] = 'enter';}
        if (userInput[i] == 'i') {textEncrypt[i] = 'imes';}
        if (userInput[i] == 'a') {textEncrypt[i] = 'ai';}
        if (userInput[i] == 'o') {textEncrypt[i] = 'ober';}
        if (userInput[i] == 'u') {textEncrypt[i] = 'ufat';}
        if (userInput[i] != 'a' && userInput[i] != 'e' && userInput[i] != 'i' 
        && userInput[i] != 'o' && userInput[i] != 'u') {textEncrypt[i+c] = userInput[i];}
    }
    
    textFinal.innerHTML = textEncrypt.join('');
    spanTextInput.innerHTML = userInput;
}

function decrypt() {
    let textEncrypt = [];
    userInputAux = userInput.value;

    show();
    
    textEncrypt = decryptText(userInputAux);
    
    textFinal.innerHTML = textEncrypt;
    spanTextInput.innerHTML = userInput;
}

function decryptText(text) {
    for (let i=0; i<text.length; i++) {
        text = text.replace('ai','a');
        text = text.replace('enter','e');
        text = text.replace('imes','i');
        text = text.replace('ober','o');
        text = text.replace('ufat','u');
    }
    return text;
}

function copy() {
    let copyText = document.getElementById('text');
    let textArea = document.createElement("textarea");
    
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
}

window.addEventListener('load', showText);