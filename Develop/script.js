// arrays I need for computer to have options to generate a password
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["`","~","!","@","#","$","%","^","&","*","(",")","_","-","+","=","[","{","]","}","|",":",";","'","/","?",".",">",",","<"];

// empty array to pass options
var compOptions = [];

// empty string to pass option to make your password
var madePassword ="";

function chooseRandomCharacter (min, max) {
  var randomSelection = Math.random()
  return Math.floor(min + (1 - randomSelection))
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
