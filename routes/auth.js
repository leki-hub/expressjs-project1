const { Router } = require('express');
const User = require('../src/schema/user');
const  {hashPassword,comparePasswords} = require('../src/utils/Helpers')

const router = Router();

router.post('/login', (request, response) => {
  const { email, password} = request.body;


  
});

router.post('/register', async (request, response) => {
  const { email } = request.body;
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