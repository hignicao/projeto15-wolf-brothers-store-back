import { usersCollection } from "../database/db.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { ObjectID } from "bson";
dotenv.config();

export async function authValidation(req, res, next) {
	const { authorization } = req.headers;

	const token = authorization?.replace("Bearer ", "");

	if (!token) {
		return res.sendStatus(401);
	}

	try {
		jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
			if (error) {
				return res.sendStatus(401);
			}

			const user = await usersCollection.findOne({ _id: ObjectID(decoded.id) });
			if (!user) {
				return res.sendStatus(401);
			}

			delete user.password;
			req.user = user;

			return next();
		});
	} catch (error) {
		return res.status(500).send(error.message);
	}
}
