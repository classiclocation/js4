const html = '<a title="1>2">First link</a> and <a href="/two">Second link</a>';
const links = html.matchAll(/<a\b(?:[^>"']|"[^"]*"|'[^']*')*>(.*?)<\/a>/gis);

for (const link of links) {
  console.log(link[1]);
}
