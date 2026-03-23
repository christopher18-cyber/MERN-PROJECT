import express from "express";
import "dotenv/config";
import logger from "./utils/logger.js";
import { connectToDB } from "./database/db.js";
import cookieParser from "cookie-parser";
import { configCors } from "./middleware/cors.js";
import helmet from "helmet";
import { userRouter } from "./routes/user-route.js";
const app = express();

const PORT = process.env.PORT || 3000;

connectToDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(configCors());
app.use(cookieParser());

app.use("/api/user", userRouter);

app.use("/api", (req, res) => {
	res.status(200).json({ message: "Hello express" });
});

app.listen(PORT, () => {
	logger.info(`Server now running on the port ${PORT}`);
});
