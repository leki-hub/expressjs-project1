const { Router } = require('express');
const User = require('../src/schema/user');
const  {hashPassword,comparePasswords} = require('../src/utils/Helpers')

const router = Router();

router.post('/login', async (request, response) => {
  const { email, password} = request.body;
  if (!email || !password )  return response.status(400)
  const userDB= await  User.findOne({ email });
if(!userDB)   return response.status(401)
const isValidated = comparePasswords(password, userDB.password);
if(isValidated){
  return response.status(200)
}
else {
  return response.status(401)
}
});

router.post('/register', async (request, response) => {
  const { email,username } = request.body;
  const userDB = await User.findOne({ email  });
  if (userDB) {
    response.status(400).send({ msg: 'User already exists!' });
  } else {
    const password= hashPassword(request.body.password)
    console.log(password)
    const newUser = await User.create({ username, password, email });
  
    response.send(201);
  }
});

module.exports = router;