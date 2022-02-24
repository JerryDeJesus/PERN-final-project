const express = require("express");
const shoes = express.Router();
const { getAllShoes, getShoe, createShoe, deleteShoe, updateShoe } = require('../queries/shoes');

shoes.get('/', async (req, res) => {
  const allShoes = await getAllShoes();

  try{
  if(allShoes[0]){
    res.status(200).json(allShoes);
  }else{
    res.status(404).json('nothing to GET here');
  }
}catch(err){
    console.log(err);
}
});

shoes.get('/:id', async (req, res) => {
  const { id } = req.params;

  try{
      const shoe = await getShoe(id);
      if(shoe.id){
          res.status(200).json(shoe);
      }else{
          res.status(404).json("not found")
      }
  } catch(err){
      console.log(err);
  }
})

shoes.post('/', async (req, res) => {
  try{
      const createdShoe = await createShoe(req.body);
      if(createdShoe.id){
          res.status(200).json(createdShoe);
      } else{
          res.status(404).json("shoe addition error")
      }   
  }catch(err){
      console.log(err);
  }
})

  shoes.delete('/:id', async (req, res) => {
      const { id } = req.params;
      const deletedShoe = await deleteShoe(id);
        try {
            if(deletedShoe.id){
                res.status(200).json(deletedShoe);
            }else{
                res.status(404).json("shoe not found");
            }
        } catch (error) {
            console.log(error);
        }
  })

  shoes.put('/:id', async (req, res) => {
      const { id } = req.params;
      const { body } = req;
      const updatedShoe = await updateShoe(id, body);
      
      try {
          if(updatedShoe.id){
              res.status(200).json(updatedShoe);
          }else{
              res.status(404).json("shoe not found");
          }  
      } catch (error) {
          console.log(error);
      }
  })


module.exports = shoes;