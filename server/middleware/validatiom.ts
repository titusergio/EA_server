import Joi from "Joi";

const validationSchema = Joi.object({
    name: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string()
        .email()
        .lowercase()
        .required()
        .messages({
            'any.required': `"email" is a required field`
          }),
    password: Joi.string()
        .min(4)
        .required()
        .messages({
            'string.empty': `"password" cannot be an empty field`,
            'string.min': `"password" should have a minimum length of {#limit}`,
            'any.required': `"password" is a required field`
          }),
    confirmPassword: Joi.string(),
    age: Joi.number(),
    subjects: Joi.array()
})

export default validationSchema;