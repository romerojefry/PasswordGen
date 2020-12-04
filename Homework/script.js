//setting my variables 

var UpperC = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var LowerC = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var NumberC = [1,2,3,4,5,6,7,8,9];
var SpecialC = ["~","!","@","#","$","%","^","&","*","(",")","_","+"];

function generatePassword () {
  var confirmLength = prompt("How long do you want your password to be and must be between 8-128 characters?")

  confirmLength=parseInt(confirmLength);

//created a locigal operator to check the length
  if(confirmLength < 8 || confirmLength > 128 || isNaN( confirmLength)) {
    return alert("Must be between 8-128 characters!");
  }


//asking the user if they want certian characters in there password 
   var confirmUpperC = confirm("Click ok of if you want upper letter cases");
   var confirmLowerC = confirm ("Click ok if you want lower letter cases");
   var confirmNumberC = confirm("Click ok if you want numbers");
   var confirmSpecialC = confirm("Click ok if you want special cases");

//making a loop to double check if the user valid at least one parameters
  if(confirmUpperC === false && confirmLowerC === false && confirmNumberC === false && confirmSpecialC === false) {
    return alert("choose a parameter");
  }

   var userInput = [];
   var confirmIn = [];
   //functions creating the random password base off users promt
  if(confirmUpperC){
    userInput = userInput.concat(UpperC);

  var randomUpper = Math.floor(Math.random() * UpperC.length);

  confirmIn += UpperC[randomUpper];
  }

   if(confirmLowerC){
    userInput = userInput.concat(LowerC);

    var randomLower = Math.floor(Math.random() * LowerC.length);

    confirmIn += LowerC[randomLower];
  }

   if(confirmNumberC){
    userInput = userInput.concat(NumberC);

    var randomNumber = Math.floor(Math.random() * NumberC.length);

    confirmIn += NumberC[randomNumber];
  }

   if(confirmSpecialC){
    userInput = userInput.concat(SpecialC);

    var randomSpecial = Math.floor(Math.random() * SpecialC.length);

    confirmIn += SpecialC[randomSpecial];
  }

   var newPassword = (' ');

   newPassword = newPassword.concat(confirmIn);

  for (var i = 0; i < confirmLength - confirmIn.length; i ++) {
    var randomNumber = Math.floor(Math.random() * userInput.length);

   newPassword += userInput[randomNumber];
  }

  return newPassword;

};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
