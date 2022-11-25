import joi, { string } from "joi";

export const purchaseCompletionInformationSchema =joi.object({
    formPayment:string().required(),
    CPF:string().required(),
    CEP:string().required(),
}) 