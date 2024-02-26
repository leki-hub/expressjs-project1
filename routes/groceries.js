const {Router} = require(express)

const  router = Router();

router.get('/groceries', (req,res)=>{
    res.send(
        groceries
    )
})
router.post( '/groceries', ( req, res )=>{
    const item = req.body;
    groceries.push(item)
    console.log(item)
    res.send(201, "data created")
})

router.get('/groceries/:item', (req,res)=>{
    const {item} = req.params
    const groceryItem= groceries.find(g => g.item ===item)
   res.send(groceryItem)
})

