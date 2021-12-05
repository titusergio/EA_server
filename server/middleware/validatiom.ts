import joi from "joi";

const validationSchema = joi.object({
    name: joi.string(),
    lastName: joi.string(),
    email: joi.string().email().lowercase().required(),
    password: joi.string().min(4).required(),
    age: joi.number(),
    subjects: joi.array()
})

export default validationSchema;