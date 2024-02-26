
const express = require( 'express' );
const grocerieRoutes = require( '../routes/groceries.js');
const marketroutes= require( '../routes/markets.js') ; 
const cookieParser = require("cookie-parser")
const PORT= 3000
const app= express()
app.use( express.json())
app.use( express.urlencoded({ extended: true }))
app.use(cookieParser());
// set a simple middleware usable to all routes in the application
app.use((req,res,next)=>{
    console.log(req.url)
    next()

})
 app.use('/api/v1/groceries',grocerieRoutes);
 app.use("/api/v1/markets",marketroutes)



app.listen(PORT, ()=> console.log(`App running on serverListening on ${PORT}`))

