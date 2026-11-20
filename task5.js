const text = "Colors: #FF0000, #00ff99 and #1234567";
const colors = text.match(/#[0-9a-f]{6}\b/gi) || [];

console.log(colors);
