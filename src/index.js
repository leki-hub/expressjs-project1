const express = require( 'express' );

const PORT= 3000
const app= express()
app.use( express.json())


const groceries = [
    {name:'apple'},
    {name: 'banana'}
]
app.get('/groceries', (req,res)=>{
    res.send(
        groceries
    )
})
app.post( '/groceries', ( req, res )=>{
    const item = req.body;
    groceries.push(item)
    console.log(item)
    res.send(201, "data created")
})



app.listen(PORT, ()=> console.log(`App running on serverListening on ${PORT}`))

