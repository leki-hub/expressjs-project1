const passport =  require('passport');
const User = require( './strategies/schema/user' );
const {Strategy} = require('passport-local')
passport.use(new Strategy(
    {usernameField: 'email'}, // use the email field for username
  async  (username, password, done)=> {
    if(!username || !password) {
       throw  new Error("Username and Password are required")
    }
const userDB= await  User.findOne({email });
if (!userDB){
    return done(null , false ,{message : "No user found"})
}

}))
