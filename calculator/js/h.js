function getNumber(number){
    let getNumber = document.getElementById("output-value");
    switch(number){
        case 0:
            getNumber.innerHTML += '0';
            break;
        case 1:
            getNumber.innerHTML += '1';
            break;
        case 2:
            getNumber.innerHTML += '2';
            break;
        case 3:
            getNumber.innerHTML += '3';
            break;
        case 4:
            getNumber.innerHTML += '4';
            break;
        case 5:
            getNumber.innerHTML += '5';
            break;
        case 6:
            getNumber.innerHTML += '6';
            break;
        case 7:
            getNumber.innerHTML += '7';
            break;
        case 8:
            getNumber.innerHTML += '8';
            break;
        case 9:
            getNumber.innerHTML += '9';
            break;
    }
}

function getName(){
    document.getElementById("history-value").innerHTML = "";
}

function getOperates(operate){
    let getOperates = document.getElementById("output-value");
    switch(operate){
        case '+':
            getOperates.innerHTML += '+';
            break;
            case '-':
            getOperates.innerHTML += '-';
            break;
            case '*':
            getOperates.innerHTML += '*';
            break;
            case '%':
            getOperates.innerHTML += '%';
            break;
            case '/':
            getOperates.innerHTML += '/';
            break;
    }
}

//calculate 
function cal(){
    let getCalcu = document.getElementById("output-value");
    let ans = Math.floor(+eval(getCalcu.innerHTML));
    document.getElementById("output-value").innerHTML = ans;
}

//clear all element
function clears(){
    let cle = document.getElementById("output-value");
    cle.innerHTML = "";
}

//clear one by one
function back(){
    let bac = document.getElementById("output-value");
    let a = bac.innerHTML;
    if(a.length >0){
        a = a.substring(0, a.length - 1);
        bac.innerHTML = a;
    }
}

//Microphone
var sounds = document.getElementById("history-value");
let spn = document.querySelector("#microphone");
spn.addEventListener('click', userSpeak);

function userSpeak(){
    if ('webkitSpeechRecognition' in window){
        let speak = new webkitSpeechRecognition();
        speak.continuous= true;
        speak.interimResults= true;
        speak.lang= "en-IN";
        speak.start();
        let finalSpeak="";
        speak.onresult = function(event) {
            let interimTranscript="";
            for(let i= event.resultIndex; i < event.results.length; i++){
                let transcripts = event.results[i][0].transcript;
                transcripts.replace('\n','<br>');
                if(event.results[i].isFinal){
                    finalSpeak += transcripts;
                }else{
                    interimTranscript += transcripts;
                }
                sounds.innerHTML = finalSpeak + interimTranscript;
            }
        }
    }else{
        sounds.innerHTML = "Browser not support";
    }
}



