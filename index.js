import express from "express";
import cors from "cors";

const app = express();
const port = 5001;

// app.use(cors);

app.use("/api/", (req, res) => {
  res.send("Test app running");
});

app.use("/api/test", (req, res) => {
  return res.status(200).json({ message: "Scoutmate API" });
});

app.listen(port, () => console.log("App is running"));
