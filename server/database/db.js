import "dotenv/config";
import mongoose from "mongoose";
import logger from "../utils/logger.js";

const uri = process.env.MONGODB_URL;

export async function connectToDB() {
	try {
		await mongoose.connect(uri, { dbName: "MERN-PROJECT" });
		logger.info("MongoBD connected successfully");
	} catch (err) {
		logger.error("MongoDB failed to connect", err);
	}
}
