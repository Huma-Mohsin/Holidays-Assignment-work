//Q-5 program for password validation through function.
import chalk from "chalk";

function passwordValidation(password: any) {
  const minLength = 8;//Function Declaration
  const maxLength = 15;
//Password Length Check
  if (password.length < minLength || password.length > maxLength) {
    return chalk.yellowBright(
      "Your password must be between 5 and 10 characters long."
    );
  }
  //Declare Variables
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let SpecialCharacters = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  let numbers = "0123456789";

  let containsUpperCase = false; //This variable is initially set to false and will be set to true if the password contains at least one uppercase letter.
  let containsLowerCase = false;// This variable is initially set to false and will be set to true if the password contains at least one lowercase letter.
  let containsSpecialChar = false;// This variable is initially set to false and will be set to true if the password contains at least one special character.
  let containsNumber = false;// This variable is initially set to false and will be set to true if the password contains at least one number.
//Character Type Check
  for (let char of password) {
    if (uppercase.includes(char)) {
      containsUpperCase = true;
    } else if (lowercase.includes(char)) {
      containsLowerCase = true;
    } else if (SpecialCharacters.includes(char)) {
      containsSpecialChar = true;
    } else if (numbers.includes(char)) {
      containsNumber = true;
    }
  }
//Final Validation
  if (
    !containsUpperCase ||
    !containsLowerCase ||
    !containsSpecialChar ||
    !containsNumber
  ) {
    return chalk.redBright(
      "Your password is weak. It should contain at least one uppercase letter, one lowercase letter, one special character, and one number."
    );
  } else {
    return chalk.greenBright("Your password is valid and strong.");
  }
}
//Testing Password
let password = "huma12345";
console.log(chalk.blueBright(password));
console.log(passwordValidation(password));
///Author-huma Mohsin
