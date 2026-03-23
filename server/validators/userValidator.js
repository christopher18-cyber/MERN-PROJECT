import joi from "joi";

export function validateRegisterUserSchema(data) {
	const schema = joi.object({
		name: joi.string().min(3).max(50).required(),
		password: joi
			.string()
			.min(8)
			.pattern(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?])/)
			.required()
			.messages({
				"string.pattern.base":
					"Password must contain at least one letter, number and symbol",
			}),
		email: joi
			.string()
			.email({ tlds: { allow: ["com", "edu", "org", "ng"] } })
			.required()
			.messages({
				"string.email": "Please provide a valid email address",
			}),
	});

	return schema.validate(data);
}
