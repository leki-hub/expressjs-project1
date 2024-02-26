import router from '../routes/groceries';
const express = require( 'express' );


const PORT= 3000
const app= express()
app.use( express.json())
app.use( express.urlencoded({ extended: true }))
// set a simple middleware usable to all routes in the application
app.use((req,res,next)=>{
    console.log(req.url)
    next()

})

// const groceries = [
//     {item:'apple',
//      quantity:5},
    
//     {item: 'banana',quantity:10}
// ]
// app.get('/groceries', (req,res)=>{
//     res.send(
//         groceries
//     )
// })
// app.post( '/groceries', ( req, res )=>{
//     const item = req.body;
//     groceries.push(item)
//     console.log(item)
//     res.send(201, "data created")
// })

// app.get('/groceries/:item', (req,res)=>{
//     const {item} = req.params
//     const groceryItem= groceries.find(g => g.item ===item)
//    res.send(groceryItem)
// })



app.listen(PORT, ()=> console.log(`App running on serverListening on ${PORT}`))

