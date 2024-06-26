
function add(){
    let numberOne = parseFloat(document.getElementById('valueOne').value);
    let numberTwo = parseFloat(document.getElementById('valueTwo').value);
    console.log(numberOne, numberTwo);
    let answer = numberOne + numberTwo;
    document.getElementById('answer').innerHTML = `Answer: <br> ${answer}`;  
    document.getElementById('answer-container').style.display = 'block';
    document.getElementById('valueOne').value = "";  
    document.getElementById('valueTwo').value = "";  
    
}

function sub(){
    let numberOne = parseFloat(document.getElementById('valueOne').value);
    let numberTwo = parseFloat(document.getElementById('valueTwo').value);
    let answer = numberOne - numberTwo;
    document.getElementById('answer').innerHTML = `Answer: <br> ${answer}`;
    document.getElementById('answer-container').style.display = 'block';
    document.getElementById('valueOne').value = "";  
    document.getElementById('valueTwo').value = ""; 
}

function times(){
    let numberOne = parseFloat(document.getElementById('valueOne').value);
    let numberTwo = parseFloat(document.getElementById('valueTwo').value);
    let answer = numberOne * numberTwo;
    document.getElementById('answer').innerHTML = `Answer: <br> ${answer}`;
    document.getElementById('answer-container').style.display = 'block';
    document.getElementById('valueOne').value = "";  
    document.getElementById('valueTwo').value = ""; 
}

function divide(){
    let numberOne = parseFloat(document.getElementById('valueOne').value);
    let numberTwo = parseFloat(document.getElementById('valueTwo').value);
    let answer = numberOne / numberTwo;
    document.getElementById('answer').innerHTML = `Answer: <br> ${answer}`;   
    document.getElementById('answer-container').style.display = 'block'; 
    document.getElementById('valueOne').value = "";  
    document.getElementById('valueTwo').value = ""; 
}

function reset(){
    document.getElementById('valueOne').value = "";  
    document.getElementById('valueTwo').value = ""; 
    document.getElementById('answer').innerHTML = "";
    document.getElementById('answer-container').style.display = 'none';
}