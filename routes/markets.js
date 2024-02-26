const { response } = require("express");

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
    {id:4,
        store:"Whole foods",
    miles:2},
    {id:5,
        store:"John Kim",
    miles:2.5},
    {id:6,
        store:"Sanders",
    miles:3}
];
marketrouter.get('/', (request,response)=>{
    console.log(request.query)
    const {miles} = request.query;
    const parsedMile= parseInt(miles);
    const filteredStores= supermarkets.filter((supermarket)=>supermarket.miles <=parsedMile);
    if(!isNaN(parsedMile)){
      response.send(filteredStores)
    }
    else
    response.send(supermarkets);
})

module.exports = marketrouter
