import "express-async-errors";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// db and authenticateUser
import connectDB from "./db/connect.js";

// routers
import authRouter from "./routes/authRoutes.js";
import jobRouter from "./routes/jobsRoutes.js";

// middleware
import morgan from "morgan";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

if (process.env.NODE_ENV !== 'production'){
  app.use(morgan("dev"));
}
app.use(express.json());


app.get("/", (req, res) => {
  res.json({ msg: "backend is working!" });
});
app.get("/api/v1", (req, res) => {
  res.json({ msg: "API" });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`server running on port: ${port}`));
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();
