import bcrypt from "bcrypt";
import { usersCollection } from "../database/db.js";

export async function signInValidation(req, res, next) {
	const { email, password } = req.body;

	const user = await usersCollection.findOne({ email });
	if (!user) {
		return res.status(401).send("Email ou senha inválidos");
	}

	const isPasswordCorrect = bcrypt.compareSync(password, user.password);
	if (!isPasswordCorrect) {
		return res.status(401).send("Email ou senha inválidos");
	}

	delete user.password;
  req.user = user;

	next();
}
