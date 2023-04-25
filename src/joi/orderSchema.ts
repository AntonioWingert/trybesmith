import Joi from 'joi';

const orderSchema = Joi.object({
  productsIds: Joi
    .array()
    .items(Joi.number().min(1).positive().integer())
    .required().messages({
      'array.base': '"productsIds" must be an array',
      'array.min': '"productsIds" must include only numbers',
      'array.empty': '"productsIds" must include at least one number',
      'number.base': '"productsIds" must include only numbers',
    }) });

export default orderSchema;