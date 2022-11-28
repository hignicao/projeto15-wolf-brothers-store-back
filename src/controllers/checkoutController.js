import { cartCollection, completedPurchasesCollection } from "../database/db.js";
import { format } from "date-fns";

export async function postPurchase(req, res) {
	const purchaseInfo = req.purchaseInfo;
	const user = req.user;

	try {
		const products = await cartCollection.find({ key: user._id }).toArray();

		await completedPurchasesCollection.insertOne({
			key: user._id,
			products,
			purchaseInfo,
			timeOfPurchase: format(new Date(), "HH:mm - dd/MM/yyyy"),
		});

		await cartCollection.deleteMany({ key: user._id });
		return res.send({ key: user._id, products, purchaseInfo });
	} catch (err) {
		return res.status(500).send({ message: "Server error" });
	}
}

export async function getOrders(req, res) {
	const user = req.user;

	try {
		const products = await completedPurchasesCollection.find({ key: user._id }).toArray();

		return res.send(products);
	} catch (error) {
		return res.status(500).send({ message: "Server error" });
	}
}
