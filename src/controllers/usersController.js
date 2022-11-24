import bcrypt from "bcrypt";
import { usersCollection } from "../database/db.js";
import jwt from "jsonwebtoken";

export async function signUp(req, res) {
	const user = req.user;

	try {
		const hashPassword = bcrypt.hashSync(user.password, 10);
		await usersCollection.insertOne({ ...user, password: hashPassword });
		res.sendStatus(201);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}

export async function signIn(req, res) {
	const user = req.user;
	const token = jwt.sign({ id: user._id }, process.env.SECRET_JWT, { expiresIn: 86400 });

	try {
		await sessionsCollection.insertOne({ token, userId: user._id });
		delete user.password;
		res.send({ ...user, token: token });
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}
