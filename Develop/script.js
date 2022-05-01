// Assignment Code
var generateBtn = document.querySelector("#generate");
//array of numbers
const numberlist = [1,2,3,4,5,6,7,8,9,0];
//array of capital letters
const capitals = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
//array of lowercase letters
const lowers = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
//array of specials characters
const specials = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",":",";","'","\","|","<",",",",".",">",".","?","/"];
//promtps:
//password length

function generatePassword() {
let choices = [];
var passwordlength = prompt("Please choose your length between 8 and 128 characters");

if (passwordlength < 8 || passwordlength > 128){
  alert("Please enter a number between 8 and 128");
  generatePassword();
}
//Number criteria prompt
var numbersPrompt = confirm("Are you ok to have numbers in your new password?");

//Uppercase prompt
var uppercasePrompt = confirm("Would you like to include uppercase characters in your new password?");

//Lowercase prompt
var lowercasePrompt = confirm("Would you like to include lowercase characters in your new password?");

//Special characters prompt
var specialcharactersPrompt = confirm("Are you ok with having special characters in your new password? eg. !££$%^ etc");

if (numbersPrompt ==true){
  choices = choices.concat(numberlist);
}

if(lowercasePrompt ==true){
  choices = choices.concat(lowers);
}

if (uppercasePrompt==true){
  choices = choices.concat(capitals);
}

if (specialcharactersPrompt==true){
  choices = choices.concat(specials);
}

if(
  lowercasePrompt == false &&
  uppercasePrompt == false &&
  specialcharactersPrompt == false &&
  numbersPrompt == false
){
  alert("Please select at least one of the options.");
}
console.log(choices);

var results = "";

for (let i = 0, n = choices.length; i < parseInt(passwordlength); i ++){
  results += choices[Math.floor(Math.random() * n)];
}
return results;
}
 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
