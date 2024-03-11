const {Router} = require('express')

const  router = Router();

const groceries = [
    {item:'apple',
     quantity:5},
    
    {item: 'banana',quantity:10},
    {item: 'orange',quantity:10}
]

router.get('/', (req,res)=>{

    
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
    console.log(req.cookies)
    const groceryItem= groceries.find(g => g.item ===item)
   res.send(groceryItem)
})

router.get('/shopping/cart' , (request,response)=>{
  const{ cart } = request.session ;
  
  if(!cart){
    response.send('No items added to the cart')
  }else
  response.send(cart)
    } 

)
router.post('/shopping/cart/item' , (request,response)=>{
   const {item,quantity}  = request.body
   const cardItems = {item,quantity}
   console.log('card items',cardItems)
   const{cart}=request.session
   if(cart){
    request.session.cart.items.push(cardItems)
   }
   else{
       request.session.cart={items:[cardItems]}
       }
response.send(201, "item added to the cart")

})


module.exports=router;
