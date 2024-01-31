import express from "express";
import cors from "cors";

const app = express();
const port = 5000;

// app.use(cors);

app.get("/", (req, res) => {
  res.send("Test app running");
});

app.listen(port, () => console.log("App is running"));
