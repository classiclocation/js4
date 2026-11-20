const html = '<div title="1>2">Hello, <b>world</b>!</div>';
const tags = html.match(/<\/?[a-z][a-z0-9]*(?:[^>"']|"[^"]*"|'[^']*')*>/gi) || [];

console.log(tags);
