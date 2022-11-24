import { cartCollection } from "../database/db.js";

export async function postProductToCart(req, res) {
  const product = req.product;
  const user = req.user;
  console.log(user, product)
  try {
    console.log("entrei")
    await cartCollection.insertOne({...product, key: user._id });
    return res.sendStatus(200);
  } catch (err) {
    console.log('fudeeo')
    return res.status(500).send({ message: "Server error" });
  }
}
