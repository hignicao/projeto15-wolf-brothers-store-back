import { ObjectID } from "bson";
import { cartCollection } from "../database/db.js";

export async function deleteProductfromCartValidation(req, res, next) {
	const id = req.params.productId;

	try {
		const product = await cartCollection.findOne({ _id: ObjectID(id) });

		if (!product) {
			return res.sendStatus(404);
		}
	} catch (err) {
		return res.status(500).send({ message: "Server error" });
	}
	next();
}
