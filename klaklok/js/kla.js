var khmerGame = () => {
    let si = Math.floor(Math.random()* 6) + 1;
    let si1 = Math.floor(Math.random()* 6) + 1;
    let si2 = Math.floor(Math.random()* 6) + 1;
    let output = " ";
    let output1 = " ";
    let output2 = " ";

    let la = document.getElementsByName("game"); 
    let laCheck = "";
    for (let i = 0; i <laCheck.length; i++){
        if ( la[i].checked){
            if(la[i].value == si1 || la[i].value == si || la[i].value == si2)
                alert("congratulation!")
        }
    }
    switch(si){
        case 1 :
            output = "<img src='image/1.PNG'  style='width:100px;'>";
            break;
        case 2 :
            output = "<img src='image/3.PNG'  style='width:100px;'>";
            break;
        case 3 :
            output = "<img src='image/5.PNG'  style='width:100px;'>";
            break;    
        case 4 :
            output = "<img src='image/2.PNG'  style='width:100px;'>";
            break;
        case 5 :
            output = "<img src='image/4.PNG'  style='width:100px;'>";
            break;
        case 6 :
            output = "<img src='image/6.PNG'  style='width:100px;'>";
            break;
    }
    switch(si1){
        case 1 :
            output1 = "<img src='image/2.PNG'  style='width:100px;'>";
            break;
        case 2 :
            output1  = "<img src='image/5.PNG'  style='width:100px;'>";
            break;
        case 3 :
            output1  = "<img src='image/1.PNG'  style='width:100px;'>";
            break;    
        case 4 :
            output1  = "<img src='image/4.PNG'  style='width:100px;'>";
            break;
        case 5 :
            output1 = "<img src='image/3.PNG'  style='width:100px;'>";
            break;
        case 6 :
            output1 = "<img src='image/6.PNG'  style='width:100px;'>";
            break;
    }
    switch(si2){
        case 1 :
            output2 = "<img src='image/6.PNG'  style='width:100px;'>";
            break;
        case 2 :
            output2 = "<img src='image/5.PNG'  style='width:100px;'>";
            break;
        case 3 :
            output2 = "<img src='image/2.PNG'  style='width:100px;'>";
            break;    
        case 4 :
            output2 = "<img src='image/4.PNG'  style='width:100px;'>";
            break;
        case 5 :
            output2 = "<img src='image/1.PNG'  style='width:100px;'>";
            break;
        case 6 :
            output2 = "<img src='image/3.PNG'  style='width:100px;'>";
            break;
    }
    let result = document.getElementById("result");
    setTimeout(() => {
        result.innerHTML = output + " " + output1 + " " + output2;
    }, 500)
}
//clear result
var playAgain = () =>{ 
    let reault = document.getElementById("result");
    result.innerHTML = "";
}
var clear = document.getElementById("clear");
clear.addEventListener("click", playAgain);
var playGame = document.getElementById("play");
playGame.addEventListener("click", khmerGame);