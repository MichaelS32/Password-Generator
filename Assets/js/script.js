// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "~", "?", "<", ">", "/"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var mainArray = [];
var randomPassword = "";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
var passwordLength = window.prompt("Please enter the number of characters you want your new password to be. It may be between 8 and 128 characters");
if(!passwordLength || passwordLength <= 7 || passwordLength >= 129) {
  return alert("Invalid Response, please try again.");
}
var useLowerCase = confirm("Do you want your new password to include lower case letters?");
if(useLowerCase) {
  mainArray = mainArray.concat(lowerCase);
}
var useUpperCase = confirm("Do you want your new password to include uppercase letters?");
if(useUpperCase) {
  mainArray = mainArray.concat(upperCase);
}
var useNumbers = confirm("Do you want your new password to include numbers?");
if(useNumbers) {
  mainArray = mainArray.concat(numbers);
}
var useSpecialCharacters = window.confirm("Do you want your new password to include special characters?");
if(useSpecialCharacters) {
  mainArray = mainArray.concat(specialCharacters)
}

for(i = 0; i < passwordLength; i++) {
  randomPassword += mainArray[Math.floor(Math.random() * (mainArray.length))];
  console.log(Math.floor(Math.random() * (mainArray.length)));
  console.log(randomPassword);
}
return randomPassword;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
