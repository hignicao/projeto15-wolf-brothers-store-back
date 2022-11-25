import { cartCollection, completedPurchasesCollection } from "../database/db.js";

export async function postPurchase(req, res) {
  const infos = req.infos;
  const user = req.user;

  try {
    const boughtProducts = await cartCollection
      .find({ key: user._id })
      .toArray();
    await completedPurchasesCollection.insertOne({
      key: user._id,
      boughtProducts,
      ...infos,
    });
    console.log({ key: user._id, boughtProducts, ...infos });
    return res.send({ key: user._id, boughtProducts, ...infos });
  } catch (err) {
    return res.status(500).send({ message: "Server error" });
  }
}
