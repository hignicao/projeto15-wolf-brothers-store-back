import { ObjectID } from "bson";
import { cartCollection } from "../database/db.js";

export async function postProductToCart(req, res) {
	const product = req.product;
	const user = req.user;
	const quantity = Number(req.quantity);

	try {
		await cartCollection.insertOne({ ...product, quantity, key: user._id });
		return res.sendStatus(200);
	} catch (err) {
		return res.status(500).send({ message: "Server error" });
	}
}

export async function getProductsInTheCart(req, res) {
	const user = req.user;

	const computeTotalPurchaseValue = (arr) => {
		const totalValuePerItem = arr.map((element) => element.price * element.quantity);
		const totalPurchaseValue = totalValuePerItem.reduce((prev, current) => prev + current, 0);
		return totalPurchaseValue;
	};

	try {
		const products = await cartCollection.find({ key: user._id }).toArray();
		const purchasePrice = computeTotalPurchaseValue(products);
		return res.send({ products, purchasePrice });
	} catch (err) {
		return res.status(500).send({ message: "Server error" });
	}
}

export async function deleteProductFromCart(req, res) {
	const id = req.params.productId;

	try {
		const oie = await cartCollection.deleteOne({ _id: ObjectID(id) });
		console.log(oie);
		return res.sendStatus(200);
	} catch (err) {
		return res.status(500).send({ message: "Server error" });
	}
}
