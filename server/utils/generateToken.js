import "dotenv/config";
import jwt from "jsonwebtoken";

export function generateToken(userId) {
	return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
		expiresIn: 3 * 24 * 60 * 60,
	});
}
