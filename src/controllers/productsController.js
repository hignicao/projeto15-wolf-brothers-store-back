import { ObjectID } from "bson";
import { productsCollection } from "../database/db.js";

export  async function getProducts(req, res) {
  try {
    const products = await productsCollection.find().toArray();
    return res.status(200).send({ products });
  } catch (err) {
    return res.status(500).send({ message: "Server error" });
  }
}

export  async function getFilteredProducts(req, res){
   const name = req.params.name;
   try{
    const filteredProducts = await productsCollection.find({name:{$regex:name, $options:"i"}}).toArray();
    return res.status(200).send({  filteredProducts });
   }catch(err){
    return res.status(500).send({ message: "Server error" });
   }
   
}

export  async function getSelectedProduct(req, res){
    const idProduct = req.params.idProduct;

    try{
        const product = await productsCollection.findOne({_id:ObjectID(idProduct)});
        return res.status(200).send({ product  });
    }catch(err){
        return res.status(500).send({ message: "Server error" });
    }

}