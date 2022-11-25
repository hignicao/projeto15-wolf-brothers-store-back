import joi from "joi";

export const purchaseCompletionInformationSchema =joi.object({
    formPayment:joi.string().required(),
    CPF:joi.string().required(),
    CEP:joi.string().required(),
}) 