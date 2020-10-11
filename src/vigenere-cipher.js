const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(phrase, key) {
    let encryptedPhrase = '';

    key = key.toUpperCase().repeat(Math.ceil(phrase.length / key.length));
    phrase = phrase.toUpperCase();

    let phraseCounter = 0;
    let keyCounter = 0;

    while (phraseCounter < phrase.length) {
      if (phrase.charCodeAt(phraseCounter) >= 65 && phrase.charCodeAt(phraseCounter) <= 90) {
        encryptedPhrase += String.fromCharCode(((phrase.charCodeAt(phraseCounter) - 65 + key.charCodeAt(keyCounter) - 65) % 26) + 65)
        phraseCounter++;
        keyCounter++;
      } else {
        encryptedPhrase += phrase[phraseCounter];
        phraseCounter++;
      };
    };

    if (this.direct) {
      return encryptedPhrase;
    } else {
      return encryptedPhrase.split('').reverse().join('');
    };
  }

  decrypt(phrase, key) {
    let decryptedPhrase = '';
    key = key.toUpperCase().repeat(Math.ceil(phrase.length / key.length));

    phrase = phrase.toUpperCase();

    let phraseCounter = 0;
    let keyCounter = 0;

    while (phraseCounter < phrase.length) {
      if (phrase.charCodeAt(phraseCounter) >= 65 && phrase.charCodeAt(phraseCounter) <= 90) {
        decryptedPhrase += String.fromCharCode(((phrase.charCodeAt(phraseCounter) + 26 - key.charCodeAt(keyCounter)) % 26) + 65);
        phraseCounter++;
        keyCounter++;
      } else {
        decryptedPhrase += phrase[phraseCounter];
        phraseCounter++;
      };
    };

    if (this.direct) {
      return decryptedPhrase;
    } else {
      return decryptedPhrase.split('').reverse().join('');
    };
  };
}

module.exports = VigenereCipheringMachine;