
const express = require( 'express' );
const router = require( '../routes/groceries.js');

const PORT= 3000
const app= express()
app.use( express.json())
app.use( express.urlencoded({ extended: true }))
// set a simple middleware usable to all routes in the application
app.use((req,res,next)=>{
    console.log(req.url)
    next()

})
 app.use(router);



app.listen(PORT, ()=> console.log(`App running on serverListening on ${PORT}`))

