import { purchaseCompletionInformationSchema } from "../schemas/purchaseCompletionInformationSchema.js";

export function cartCheckout(req,res,next){
    const body =req.body;
    const {error} =validate.purchaseCompletionInformationSchema(body);
    if(error){
        return sendStatus(422);
    }
   req.infos =body;
   next();
}

