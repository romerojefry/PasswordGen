//setting my variables 

const UpperC = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const LowerC = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const NumberC = [1,2,3,4,5,6,7,8,9];
const SpecialC = ["~","!","@","#","$","%","^","&","*","(",")","_","+"];

function generatePassword (){
  const confirmLength = propmt("How long do you want your password to be and must be between 8-128 characters?")

  confirmLength = parseInt(confirmLength);

//created a locigal operator to check the length
  if(confirmLength < 8 || confirmLength > 128 || isNaN( confirmLength)) {
    return alert("Must be between 8-128 characters!");
  }
}

//asking the user if they want certian characters in there password 
const confirmUpperC = confirm("Click ok of if you want upper letter cases");
const confirmLowerC = confirm ("Click ok if you want lower letter cases");
const confirmNumberC = confirm("Click ok if you want numbers");
const confirmSpecialC = confirm("Click ok if you want special cases");

//making a loop to double check if the user valid at least one parameters
if(confirmUpperC === false && confirmLowerC === false && confirmNumberC === false && confirmSpecialC === false) {
  return alert("choose a parameter");
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
