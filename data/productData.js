const fs = require('fs/promises');
const productsDb = require('../config/products.json');



module.exports = {
    getAll(){
        return productsDb
    },
    getOne(id){
      return productsDb.find(x => x.id === id);  
    },
    create(cube){
        productsDb.push(cube);

        return fs.writeFile(__dirname + '/../config/products.json', 
        JSON.stringify(productsDb), 
        ) 
    }
}