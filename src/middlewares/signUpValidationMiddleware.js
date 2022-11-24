import { userSchema } from "../schemas/userSchema.js";
import { usersCollection } from "../database/db.js";

export async function signUpValidation(req, res, next) {
	const user = req.body;
	const { error } = userSchema.validate(user, { abortEarly: false });

	if (error) {
		const errors = error.details.map((err) => err.message);
		return res.status(400).send(errors);
	}

	const userExists = await usersCollection.findOne({ email: user.email });
	if (userExists) {
		return res.status(409).send("E-mail já cadastrado");
	}

	delete user.confirmPassword;
	req.user = user;

	next();
}
