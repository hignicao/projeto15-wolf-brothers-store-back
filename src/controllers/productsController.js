import { productsCollection } from "../database/db";

export default async function getProducts(req, res) {
  try {
    const products = await productsCollection.find().toArray();
    return res.status(200).send({ products });
  } catch (err) {
    return res.status(500).send({ message: "Server error" });
  }
}
