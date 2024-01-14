// Generate random password

'use strict'

const GeneratePassword = (alphabet, length) => {

  let key = '';
  for (let i = 0; i < length; i++) {
    let Index = Math.floor(Math.random() * alphabet.length);
    key = key + alphabet[Index];
  }
  return key;
};

module.exports = GeneratePassword;
