import { ObjectID } from "bson";
import { productsCollection } from "../database/db";

export default async function productExistenceValidation(req, res, next) {
  const id = req.params.productId;
  try {
    const product = await productsCollection.findOne({ _id: ObjectID(id) });
    if (!product) {
      return res.status(404).send({ message: "Not found" });
    }
  } catch (err) {
    return res.status(500).send({ message: "Server error" });
  }

  next();
}
