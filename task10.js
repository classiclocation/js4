const password = "Password1!";
const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).{8,}$/;

console.log(passwordPattern.test(password));
