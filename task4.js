const generatePassword = require('generate-password');

const generateRandomPassword = () => { 
  const password = generatePassword.generate({
    length: 12,                      
    numbers: true,                  
    symbols: true,                   
    uppercase: false,                
    lowercase: true,                 
  });

  console.log(password);
}

generateRandomPassword();