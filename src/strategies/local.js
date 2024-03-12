const passport =  require('passport');
const User = require( '../schema/user' );
const {Strategy} = require('passport-local')
const  {comparePasswords} = require('../utils/Helpers')

passport.serializeUser( ( user, done ) =>{
  // console.log("Serialize", user
  return done( null , user._id);
})

passport.use(new Strategy(
    {usernameField: 'email'}, // use the email field for username
  async  (username, password, done)=> {
    if(!username || !password) {
       throw  new Error("Username and Password are required")
    }
const userDB= await  User.findOne({email:username });
if (!userDB){
    return done(null , false ,{message : "No user found"})
}
const isValidated = comparePasswords(password, userDB.password);
if(isValidated){
console.log('User validated,  Logged In Successfully!')
done(null , userDB )
}
else {
  console.log('Invalid email or  Password')
done(null,null)
}


}))
