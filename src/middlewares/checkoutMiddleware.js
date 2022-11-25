import { purchaseCompletionInformationSchema } from "../schemas/purchaseCompletionInformationSchema.js";

export function checkout(req, res, next) {
  const body = req.body;
  const { error } =purchaseCompletionInformationSchema.validate(body);
  if (error) {
    return res.sendStatus(422);
  }
  req.infos = body;
  next();
}
