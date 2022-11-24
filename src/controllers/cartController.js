import { cartCollection } from "../database/db.js";

export async function postProductToCart(req, res) {
  const product = req.product;
  const user = req.user;
  try {
    await cartCollection.insertOne({ ...product, key: user._id });
    return res.sendStatus(200);
  } catch (err) {
    return res.status(500).send({ message: "Server error" });
  }
}

export async function getProductsInTheCart() {
  const user = req.user;
  try{
      const products = await cartCollection.find({key:user._id}).toArray();
      return res.send(products);
  }catch(err){
    return res.status(500).send({ message: "Server error" });
  }
}
