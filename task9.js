const text = "Hello, hello, hello! World world. Test test";
const words = text.match(/\p{L}+/gu) || [];

for (let i = 1; i < words.length; i++) {
  if (words[i].toLowerCase() === words[i - 1].toLowerCase()) {
    console.log(words[i]);
  }
}
