const bycrypt = require('bcrypt')
 function  hashPassword(password) {
    const salt = 
    bycrypt.genSaltSync(password)
    return bycrypt.hashSync(password,salt);
 }

 module.exports= {
    hashPassword,
    comparePasswords}

function comparePasswords (password , password){
    return bycrypt.compareSync(password)
    
}