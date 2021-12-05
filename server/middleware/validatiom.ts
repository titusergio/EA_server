import Joi from "Joi";

const validationSchema = Joi.object({
    name: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string()
        .email()
        .lowercase()
        .required()
        .messages({
            'any.required': `"a" is a required field`
          }),
    password: Joi.string()
        .min(4)
        .required()
        .messages({
            'string.empty': `"a" cannot be an empty field`,
            'string.min': `"a" should have a minimum length of {#limit}`,
            'any.required': `"a" is a required field`
          }),
    confirmPassword: Joi.string(),
    age: Joi.number(),
    subjects: Joi.array()
})

export default validationSchema;