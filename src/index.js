require('dotenv').config(); // Load environment variables
require('./database')
require('./strategies/local')
const express = require( 'express' );
const grocerieRoutes = require( '../routes/groceries.js');
const marketroutes= require( '../routes/markets.js') ; 
const cookieParser = require("cookie-parser")
const passport = require( "passport" )
const session  = require('express-session')
const authRoute = require('../routes/auth');
const MongoStore = require('connect-mongo');



const app= express()
app.use( express.json())
app.use( express.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(session(
    {
        secret:"0hdd03uns008$890dkff0nsgd",
        resave: false,
        saveUninitialized :false,
        store:  MongoStore.create({ mongoUrl: process.env.mongoDBURL })
        
    }
))
// set a simple middleware usable to all routes in the application
app.use((req,res,next)=>{
    console.log(req.url)
    next()

})


app.use(passport.initialize())
app.use(passport.session())

 app.use('/api/v1/groceries',grocerieRoutes);
 app.use("/api/v1/markets",marketroutes)
 app.use('/api/v1/auth', authRoute);



app.listen(process.env.PORT, ()=> console.log(`App running on server and Listening on ${process.env.PORT}`))


