const{Router} = require(('express'));
const marketrouter= Router();
const  supermarkets=[
    {store:"Whole foods"},
    {store:"Trader Joe's"},
    {store:"Costco"}
];
marketrouter.get('/', (req,res)=>{
    res.send(supermarkets);
})

module.exports = marketrouter
