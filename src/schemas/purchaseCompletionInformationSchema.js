import joi from "joi";

export const purchaseCompletionInformationSchema = joi.object({
  checkoutForm: joi.object({
    address: joi.string().required(),
    city: joi.string().required(),
    state: joi.string().required(),
    zipCode: joi.number().required(),
    payment: joi.string().required(),
  }),
  purchasePrice: joi.number().required(),
});
