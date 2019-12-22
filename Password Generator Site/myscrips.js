var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = lower.toUpperCase();
var number = "0123456789";
var symbols = "!@#%^&*";

var passwordsOptions = [
    lower.charAt(getRandomInt(26))+upper.charAt(getRandomInt(26))+number.charAt(getRandomInt(10))+symbols.charAt(getRandomInt(6)),
    upper.charAt(getRandomInt(26))+lower.charAt(getRandomInt(26))+number.charAt(getRandomInt(10))+symbols.charAt(getRandomInt(6)),
    number.charAt(getRandomInt(10))+symbols.charAt(getRandomInt(6))+upper.charAt(getRandomInt(26))+lower.charAt(getRandomInt(26)),
    symbols.charAt(getRandomInt(6))+upper.charAt(getRandomInt(26))+lower.charAt(getRandomInt(26))+number.charAt(getRandomInt(10))
]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function myFunction(form){
    var num = form.passwords.value;
    var array = [];
    if(num<0){
        console.log(num);
        document.getElementById("output").innerHTML = "Invalid Number";
    }
    else{
        for (i =0; i <num; i++){
            var pass1 = passwordsOptions[getRandomInt(4)];
            pass1 = pass1+ passwordsOptions[getRandomInt(4)];
            console.log(pass1);
            array[i] = " Password "+(i+1)+ ": "+pass1;
        }
        document.getElementById("output").innerHTML = array.toString();
    }


}