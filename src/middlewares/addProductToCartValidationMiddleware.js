import { ObjectID } from "bson";
import { productsCollection } from "../database/db.js";
import purchaseInformationSchema from "../schemas/purchaseInformationSchema.js";

export async function addProductToCartValidation(req, res, next) {
  const id = req.params.productId;
  const body = req.body;
  const { error } = purchaseInformationSchema.validate(body);
  if (error) {
    return res.sendStatus(422);
  }
  try {
    const product = await productsCollection.findOne({ _id: ObjectID(id) });
    if (!product) {
      return res.status(404).send({ message: "Not found" });
    }
    delete product._id;
    req.product = product;
    req.quantity = body.quantity;
  } catch (err) {
    return res.status(500).send({ message: "Server error" });
  }

  return next();
}
