const {Router} = require('express')

const  router = Router();

const groceries = [
    {item:'apple',
     quantity:5},
    
    {item: 'banana',quantity:10},
    {item: 'orange',quantity:10}
]

router.get('/', (req,res)=>{
    res.cookie("logged",true,{
        maxAge : 6000,
        httpOnly: true
    })
    
    res.send(
        groceries
    )
})
router.post( '/', ( req, res )=>{
    const item = req.body;
    groceries.push(item)
    console.log(item)
    res.send(201, "data created")
})

router.get('/:item', (req,res)=>{
    const {item} = req.params
    console.log(req.headers.cookie)
    const groceryItem= groceries.find(g => g.item ===item)
   res.send(groceryItem)
})
module.exports=router;
