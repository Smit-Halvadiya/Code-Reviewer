import express from "express";

import cors from "cors"
const app = express();
app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World")
})


import aiRoutes from "./routes/ai.route.js"

app.use("/ai", aiRoutes);

export default app;