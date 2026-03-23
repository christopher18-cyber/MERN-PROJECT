import logger from "../utils/logger.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import { validateRegisterUserSchema } from "../validators/userValidator.js";
import { generateToken } from "../utils/generateToken.js";

export async function registerUser(req, res) {
	logger.info("Register endpoint hitted");
	try {
		const { error, value } = validateRegisterUserSchema(req.body);

		if (error) {
			logger.warn("Validation error", error.message);

			return res.status(400).json({
				success: false,
				message: error.details?.[0]?.message || error.message,
			});
		} else {
			const { name, email, password } = value;

			let isUserAlreadyExist = await User.findOne({ email });

			if (isUserAlreadyExist) {
				return res.status(409).json({
					success: false,
					message:
						"User email already exist, please try with a different email.",
				});
			} else {
				const salt = await bcrypt.genSalt(12);
				const hashedPassword = await bcrypt.hash(password, salt);

				const newlyCreatedUser = await User.create({
					name,
					email,
					password: hashedPassword,
				});

				if (newlyCreatedUser) {
					const token = generateToken(newlyCreatedUser?._id);

					res.cookie("token", token, {
						withCredentials: true,
						httpOnly: false,
						// secure: false,
						// samesite: true,
						// maxAge: 24 * 60 * 60 * 1000,
					});

					res.status(201).json({
						success: true,
						message: "User registration successful",
						userData: {
							name: newlyCreatedUser.name,
							email: newlyCreatedUser.email,
						},
					});
				}
			}
		}
	} catch (err) {
		logger.error("Server error", err);
		return res.status(500).json({
			message: "Internal server error",
			success: false,
		});
	}
}
