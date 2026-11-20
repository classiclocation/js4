const address = "https://example.com/page";

try {
  const url = new URL(address);
  console.log(url.protocol === "http:" || url.protocol === "https:");
} catch {
  console.log(false);
}
