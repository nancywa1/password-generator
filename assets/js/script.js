// Assignment code here

var LOWERCASE_CHAR_CODES = arrayFromLowToHight(97, 122)
var UPPERCASE_CHAR_CODES = arrayFromLowToHight(65, 90)
var NUMBER_CHAR_CODES = arrayFromLowToHight(48, 57)
var SYMBOL_CHAR_CODES = arrayFromLowToHight(33, 47).concat(arrayFromLowToHight(58, 64))
  .concat(arrayFromLowToHight(91, 96)).concat(arrayFromLowToHight(123, 126))

function arrayFromLowToHight(low, hight) {
  const array = []
  for (let i = low; i <= hight; i++) {
    array.push(i)

  }
  return array
}


var myFunction =function(){
  var characterAmount = window.prompt("Please enter your password length, password should be at least 8 characters and no more than 128 characters.")
  if (characterAmount <8||characterAmount>128)
  {
    window.alert ("Password length should be at lease 8 and less than 128, please enter a new length!")
    return myFunction()
  }
  else
  {
    var number = window.confirm("Do you want to include numbers in your password?");
    var upperCase = window.confirm("Do you want to include upper case letter in your password?");
    var lowerCase = window.confirm("Do you want to include lower case letter in your password?");
    var specialChar = window.confirm("Do you want to include special characters in your password?");
  }
  displayPassword (characterAmount, number,upperCase,  lowerCase,specialChar)
}


function generatePassword(characterAmount, number,upperCase,  lowerCase,specialChar) {

  var charCodes=[];
  if (characterAmount > 8 && characterAmount <= 128)  characterAmount = characterAmount 

  if (number) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  else charCodes=charCodes
  if (upperCase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  else charCodes=charCodes
  if (lowerCase) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES)
  else charCodes=charCodes
  if (specialChar) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  else charCodes=charCodes
 
  // console.log (NUMBER_CHAR_CODES)
  // console.log (UPPERCASE_CHAR_CODES) 
  // console.log (LOWERCASE_CHAR_CODES)
  // console.log (SYMBOL_CHAR_CODES)
  // console.log (charCodes)

  const passwordCharacters = []
  console.log (passwordCharacters)
  password.innerText = passwordCharacters
  for (var i = 0; i < characterAmount; i++) {
    let characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    console.log(characterCode)
    passwordCharacters.push(String.fromCharCode(characterCode))
    
  }
// console.log(passwordCharacters)
// console.log(passwordCharacters.join(''))

  return passwordCharacters.join('')
}
function displayPassword (characterAmount, number,upperCase,  lowerCase,specialChar){
    const newpassword = generatePassword(characterAmount, number,upperCase,  lowerCase,specialChar)
    password.innerText = newpassword
    console.log (newpassword)

}


