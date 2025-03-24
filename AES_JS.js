/* Imported Node.js's built-in crypto module to perform AES encryption and decryption. */
const crypto = require('crypto');

/* Function to encrypt plaintext using AES-256-CBC algorithm */
function aesEncrypt(text, key) {
    /* Creates a cipher object using [aes-256-cbc] algorithm and key */
    const cipher = crypto.createCipher('aes-256-cbc', key);

    /* Converts text from utf to hexadecimal */
    let encrypted = cipher.update(text, 'utf8', 'hex');

    /* Append remaining plaintext (if any) */
    encrypted += cipher.final('hex');
    return encrypted;
}

/* Function to decrypt plaintext using AES-256-CBC algorithm */
function aesDecrypt(encryptedText, key) {
    /* Creates a decipher using [aes-256-cbc] */
    const decipher = crypto.createDecipher('aes-256-cbc', key);

    /* Converts text from hexadecimal to utf */
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');

    /* Append remaining plaintext (if any) */
    decrypted += decipher.final('utf8');
    return decrypted;
}

/* Usage */

const text = 'Network Scurity and Cryptography';
const key = 'MySecretKey123';

console.log('Plain text:', text) /* Print the plaintext */

const encryptedText = aesEncrypt(text, key);

console.log('Encrypted:', encryptedText);   /* Print the encrypted text */

const decryptedText = aesDecrypt(encryptedText, key);

console.log('Decrypted:', decryptedText); /* Print decrypted text */
