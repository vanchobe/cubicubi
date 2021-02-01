const uniqid = require('uniqid');
const productData = require('../data/productData');
const Cube = require('../models/Cube');
 
 
function getOne(id){
 return productData.getOne(id);
}
 
function getAll(query){
    let products = productData.getAll();
    
    if(query.search){
        products = products.filter(x => x.name.toLowerCase().includes(query.search.toLowerCase()));
    }
    if(query.from){
        products = products.filter(x => Number(x.difficultyLevel) >= query.from)
    }
    if(query.to){
        products = products.filter(x => Number(x.difficultyLevel) <= query.to)
    }
    return products;
}

function create(data){
    let cube = new Cube(
        uniqid(), 
        data.name, 
        data.description, 
        data.imageUrl, 
        data.difficultyLevel);

        return productData.create(cube);
}

module.exports = {
    create,
    getAll,
    getOne
};