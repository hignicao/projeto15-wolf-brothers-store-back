import { productsCollection } from "../database/db";

export default async function getProducts(req, res) {
  try {
    const products = await productsCollection.find().toArray();
    return res.status(200).send({ products });
  } catch (err) {
    return res.status(500).send({ message: "Server error" });
  }
}

export default async function getFilteredProducts(req, res){
   const name = req.params.name;
   try{
    const filteredProducts = await productsCollection.find({name:{$regex:name, $options:"i"}}).toArray();
    return res.status(200).send({  filteredProducts });
   }catch(err){
    return res.status(500).send({ message: "Server error" });
   }
   
}