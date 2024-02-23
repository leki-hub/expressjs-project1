const express = require( 'express' );

const PORT= 3000
const app= express()
app.get('/groceries', (req,res)=>{
    res.send([
        {name:'apple'},
        {name: 'banana'}
    ])
})
app.listen(PORT, ()=> console.log(`App running on serverListening on ${PORT}`))