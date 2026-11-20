const text = "Hello, world! JS42";
const words = text.match(/(?<![\p{L}\d])[a-z]+(?![\p{L}\d])/giu) || [];

console.log(words);
