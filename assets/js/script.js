function checkPasswordFormat(input) {

    /* if (input.length == 0) {
        document.getElementById('charLength').style.color = 'black';
    }
    else if (input.length > 7) {
        document.getElementById('charLength').style.color = 'green';
    }
    else if(input.length <= 7){
        document.getElementById('charLength').style.color = 'red';
    } */
    if (!isNaN(input)) {
        document.getElementById('charNumber').style.color = 'green';
    }else {
        document.getElementById('charNumber').style.color = 'red';
        console.log('plus de numéro ...');
    }
    


}

/* if (!isNaN(input)) {
    document.getElementById('charNumber').style.color = 'green';
} */