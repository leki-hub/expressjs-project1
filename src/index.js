
const express = require( 'express' );
const grocerieRoutes = require( '../routes/groceries.js');
const marketroutes= require( '../routes/markets.js') ; 
const cookieParser = require("cookie-parser")
const sessionMiddleware  = require('express-session')
const mongoose = require( "mongoose" ) ;
const PORT= 3000
const app= express()
app.use( express.json())
app.use( express.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(sessionMiddleware(
    {
        secret:"secret",
        resave: false,
        saveUninitialized :false
        
    }
))
// set a simple middleware usable to all routes in the application
app.use((req,res,next)=>{
    console.log(req.url)
    next()

})

 app.use('/api/v1/groceries',grocerieRoutes);
 app.use("/api/v1/markets",marketroutes)



app.listen(process.env.PORT, ()=> console.log(`App running on serverListening on ${process.env.PORT}`))

//link mongoose local to mongoDB
mongoose
  .connect(process.env.MongoDB_URL)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database", err);
  });
  