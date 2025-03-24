function sha256(input) {
  const crypto = require("crypto");

  const hash = crypto.createHash("sha256");

  hash.update(input);

  return hash.digest("hex");
}

const input = "NSC Lab_CIS";

const hashedValue = sha256(input);

console.log("Entered text:", input);
console.log("Hashed value:", hashedValue);
