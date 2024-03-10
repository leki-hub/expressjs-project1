const passport =  require('passport');
const {Strategy} = require('passport-local')
passport.use(new Strategy(
    {usernameField: 'email'}, // use the email field for username
    (username, password, done)=> {
    // console.log("User login: ",
    

}))
