const address = "192.168.0.1";
const parts = address.split(".");
let valid = parts.length === 4;

for (const part of parts) {
  if (!/^(0|[1-9]\d{0,2})$/.test(part) || Number(part) > 255) {
    valid = false;
  }
}

console.log(valid);
