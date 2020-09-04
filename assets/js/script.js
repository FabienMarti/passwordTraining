upperCaseRegex = /^(?=.*[A-Z])$/;


function checkPasswordFormat(input) {
    //checkPWlength(input);
    checkPWUppercase(input);
   
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
    if (upperCaseRegex.test(input)) {
        document.getElementById('upperCase').style.color = 'green';
    } else {
        document.getElementById('upperCase').style.color = 'red';
    }
    console.log(upperCaseRegex.test(input));
}