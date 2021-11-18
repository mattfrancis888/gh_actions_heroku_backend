import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import food from "./routes/food";
if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}

const app = express();
// middleware for parsing bodies from URL
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

console.log("NODE ENV", process.env.privateKey);
app.use("/api/test", (req, res) => {
    res.send("hi");
});
app.use("/api", food);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
