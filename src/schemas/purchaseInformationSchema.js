import joi from "joi";

const purchaseInformationSchema = joi.object({
	quantity: joi.number().required(),
});

export default purchaseInformationSchema;
