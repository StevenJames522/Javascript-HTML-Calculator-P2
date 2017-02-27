function clearDisplay(){
    document.getElementById("display-bar").innerHTML =""; 
}

function display(userInput){
    document.getElementById("display-bar").innerHTML += userInput; 
}

function calculate(){
    var answer = eval(document.getElementById("display-bar").innerHTML);
    document.getElementById("display-bar").innerHTML = answer;
}