const NodeRSA = require("node-rsa");

function generateKeys() {
  const key = new NodeRSA({ b: 2048 });
  const publicKey = key.exportKey("public");
  const privateKey = key.exportKey("private");
  return { publicKey, privateKey };
}

function encrypt(plainText, publicKey) {
  const key = new NodeRSA(publicKey);
  const encrypted = key.encrypt(plainText, "base64");
  return encrypted;
}

function decrypt(cipherText, privateKey) {
  const key = new NodeRSA(privateKey);
  const decrypted = key.decrypt(cipherText, "utf8");
  return decrypted;
}

function main() {
  const { publicKey, privateKey } = generateKeys();

  const plainText = "221-16-620";
  console.log("Plain Text:", plainText);

  const encrypted = encrypt(plainText, publicKey);
  console.log("Encrypted Text:", encrypted);

  const decrypted = decrypt(encrypted, privateKey);
  console.log("Decrypted Text:", decrypted);
}

main();
