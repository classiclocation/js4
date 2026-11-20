const text = "\u041F\u0440\u0438\u0432\u0435\u0442, \u043C\u0438\u0440! Hello";
const words = text.match(/(?<![\p{L}\d])\p{Script=Cyrillic}+(?![\p{L}\d])/gu) || [];

console.log("Cyrillic words:", words);
