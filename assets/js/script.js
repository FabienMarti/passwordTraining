upperCaseRegex = /^(.*[A-Z].*)$/;
lowerCaseRegex = /^(.*[a-z].*)$/;
numberRegex = /^(.*[0-9].*)$/;


function checkPasswordFormat(input) {
    checkPWlength(input);
    checkPWUppercase(input);
    checkPWlowercase(input);
    checkPWnumber(input);
}

function checkPWlength(input) {
    if (input.length == 0) {
        document.getElementById('charLength').style.color = 'black';
    }
    else if (input.length > 7) {
        document.getElementById('charLength').style.color = 'green';
    }
    else if(input.length <= 7){
        document.getElementById('charLength').style.color = 'red';
    }
}

function checkPWUppercase(input) {
    if (input.length == 0) {
        document.getElementById('upperCase').style.color = 'black';
    }
    else if (upperCaseRegex.test(input)) {
        document.getElementById('upperCase').style.color = 'green';
    }else{
        document.getElementById('upperCase').style.color = 'red';
    }
    
}

function checkPWlowercase(input) {
    if (input.length == 0) {
        document.getElementById('lowerCase').style.color = 'black';
    }
    else if (lowerCaseRegex.test(input)) {
        document.getElementById('lowerCase').style.color = 'green';
    }else{
        document.getElementById('lowerCase').style.color = 'red';
    }
    
}

function checkPWnumber(input) {
    if (input.length == 0) {
        document.getElementById('charNumber').style.color = 'black';
    }
    else if (numberRegex.test(input)) {
        document.getElementById('charNumber').style.color = 'green';
    }else{
        document.getElementById('charNumber').style.color = 'red';
    }
    
}