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
var numbersPrompt = confirm("Would you like numbers in your new password?");

//Uppercase prompt
var uppercasePrompt = confirm("Would you like to include uppercase characters in your new password?");

//Lowercase prompt
var lowercasePrompt = confirm("Would you like to include lowercase characters in your new password?");

//Special characters prompt
var specialcharactersPrompt = confirm("Would you like to include any special characters in your password? eg. !££$%^ etc");

}
 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
