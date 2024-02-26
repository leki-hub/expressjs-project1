const{Router} = require(('express'));
const marketrouter= Router();
const  supermarkets=[
    {id:1,
        store:"Whole foods",
    miles:2},
    {id:2,
        store:"John Kim",
    miles:2.5},
    {id:3,
        store:"Whole foods",
    miles:3},
    {id:1,
        store:"Whole foods",
    miles:2},
    {id:2,
        store:"John Kim",
    miles:2.5},
    {id:3,
        store:"Whole foods",
    miles:3}
];
marketrouter.get('/', (req,res)=>{
    res.send(supermarkets);
})

module.exports = marketrouter
