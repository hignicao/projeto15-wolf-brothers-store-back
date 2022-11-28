import { purchaseCompletionInformationSchema } from "../schemas/purchaseCompletionInformationSchema.js";

export function checkout(req, res, next) {
  const body = req.body;

  const { error } = purchaseCompletionInformationSchema.validate(body, { abortEarly: false });

	if (error) {
		const errors = error.details.map((err) => err.message);
		return res.status(400).send(errors);
	}

  req.purchaseInfo = body;

  next();
}
