const email = "student@example.com";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const local = email.split("@")[0];
const domain = email.split("@")[1] || "";
const domainParts = domain.split(".");
const valid = emailPattern.test(email) &&
  !local.startsWith(".") &&
  !local.endsWith(".") &&
  !email.includes("..") &&
  domainParts.every(part => part.length > 0 && !part.startsWith("-") && !part.endsWith("-"));

console.log(valid);
