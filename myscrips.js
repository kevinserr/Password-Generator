var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = lower.toUpperCase();
var number = "0123456789";
var symbols = "!@#%^&*";

var passwordsOptions = [
    lower.charAt(getRandomInt(lower.length))+upper.charAt(getRandomInt(upper.length))+symbols.charAt(getRandomInt(symbols.length))+number.charAt(getRandomInt(number.length)),
    upper.charAt(getRandomInt(upper.length))+lower.charAt(getRandomInt(lower.length))+number.charAt(getRandomInt(number.length))+symbols.charAt(getRandomInt(symbols.length)),
    number.charAt(getRandomInt(number.length))+symbols.charAt(getRandomInt(symbols.length))+upper.charAt(getRandomInt(upper.length))+lower.charAt(getRandomInt(lower.length)),
    symbols.charAt(getRandomInt(symbols.length))+upper.charAt(getRandomInt(upper.length))+lower.charAt(getRandomInt(lower.length))+number.charAt(getRandomInt(number.length)),
    upper.charAt(getRandomInt(upper.length))+number.charAt(getRandomInt(number.length))+symbols.charAt(getRandomInt(symbols.length))+lower.charAt(getRandomInt(lower.lenght))
];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function myFunction(form){
    var pass1 = passwordsOptions[getRandomInt(passwordsOptions.length)];
    pass1 = pass1+ passwordsOptions[getRandomInt(passwordsOptions.length)];
    console.log(pass1);
    document.getElementById("output").innerHTML = "Password:"+pass1;
}
