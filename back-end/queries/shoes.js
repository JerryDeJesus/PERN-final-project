const db = require("../db/dbConfig.js");
const shoes = require("../controllers/shoeController.js");

const getAllShoes = async () => {
    try {
        const allShoes = await db.any("SELECT * FROM shoes;");
        return allShoes
      } catch (error) {
        return error
    }
}

const getShoe = async (id) => {
   try{
      const oneShoe = await db.one(`SELECT * FROM shoes WHERE id=$1;`, id)
      return oneShoe
   }catch(err){
      return err
   }
};

const createShoe = async (shoe) => {
   try{
      if(!shoe.image || shoe.image === "") {
         shoe.image = "https://dummyimage.com/300x300/6e6c6e/e9e9f5.png&text=No+Image";
      }
      const newShoe = await db.one(
         "INSERT INTO shoes (name, description, footwear_type, price, rating, featured, image) VALUES($1, $2, $3 ,$4, $5, $6, $7) RETURNING *;",
         [shoe.name, shoe.description, shoe.footwear_type, shoe.price, shoe.rating, shoe.featured, shoe.image]
         )
         return newShoe;
   }catch(err){
      console.log(err);
   }
};

const deleteShoe = async (id) => {
   try{
     const deletedShoe = await db.one('DELETE FROM shoes WHERE id = $1 RETURNING *;', id)
    return deletedShoe
  }catch(err){
        return err
     }
}

const updateShoe = async (id, shoe) => {
   try{
      if(!shoe.image || shoe.image === "") {
         shoe.image = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
      }
      const updatedShoe = await db.one('UPDATE shoes SET name=$1, description=$2, footwear_type=$3, price=$4, rating=$5, featured=$6, image=$7 WHERE id=$8 RETURNING *;',
      [shoe.name, shoe.description, shoe.footwear_type, shoe.price, shoe.rating, shoe.featured, shoe.image, id])
     return updatedShoe
     }catch(err){
     return err
   }
}

module.exports = { getAllShoes, getShoe, createShoe, deleteShoe, updateShoe };