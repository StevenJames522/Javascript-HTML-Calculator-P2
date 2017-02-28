function clearDisplay(){
    document.getElementById("display-bar").value =""; 
}

function display(userInput){
    document.getElementById("display-bar").value += userInput; 
}

function calculate(){
    var answer = eval(document.getElementById("display-bar").value);
    document.getElementById("display-bar").value = answer;
}