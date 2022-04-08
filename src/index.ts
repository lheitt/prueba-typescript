import express from "express";
import diaryRouter from "./routes/diaries";

const app = express();

app.use(express.json());
app.use("/api/diaries", diaryRouter);

app.get("/", (_req, res) => {
    res.send("Hola mundo!");
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
