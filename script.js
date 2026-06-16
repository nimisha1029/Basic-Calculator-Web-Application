function getInputs()
{
    let first_num = document.getElementById("first_num").value;
    let sec_num = document.getElementById("sec_num").value ;

    if(first_num === "" || sec_num === "")
    {
        document.getElementById("answer").innerHTML =
        "enter both values" ;
        return null ;
    }

    first_num = Number(first_num);
    sec_num = Number(sec_num);

    if(isNaN(first_num) || isNaN(sec_num))
    {
        document.getElementById("answer").innerHTML = 
        "enter valid num";
        return null ;
    }

    return [first_num , sec_num];
}

function add()
{
    let values = getInputs();

    if(values === null)
        return ;

    let answer = values[0] +values[1];

    document.getElementById("answer").innerHTML = 
    "answer: " + answer ;
}

function subtract()
{
    let values = getInputs();

    if(values === null)
        return ;

    let answer = values[0] - values[1];

    document.getElementById("answer").innerHTML = 
    "answer: " + answer ;
}

function multiply ()
{
    let values = getInputs();

    if(values === null)
        return ;

    let answer = values[0] * values[1];

    document.getElementById("answer").innerHTML = 
    "answer: " + answer ;
}

function divide()
{
    let values = getInputs();

    if(values === null)
        return ;
    if(values[1]===0)
    {
        document.getElementById("answer").innerHTML=
        "can't divide by zero";
        return ;
    }

    let answer = values[0] / values[1];

    document.getElementById("answer").innerHTML = 
    "answer: " + answer ;
}

function toggleTheme()
{
    document.body.classList.toggle("dark");
}