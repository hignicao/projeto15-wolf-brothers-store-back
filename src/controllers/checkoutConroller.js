import {
  cartCollection,
  completedPurchasesCollection,
} from "../database/db.js";

export async function postPurchase(req, res) {
  const purchaseInfo = req.purchaseInfo;
  const user = req.user;
  try {
    const products = await cartCollection.find({ key: user._id }).toArray();
    await completedPurchasesCollection.insertOne({
      key: user._id,
      products,
      purchaseInfo,
    });
    await cartCollection.deleteMany({ key: user._id });
    return res.send({ key: user._id, products, purchaseInfo });
  } catch (err) {
    return res.status(500).send({ message: "Server error" });
  }
}
