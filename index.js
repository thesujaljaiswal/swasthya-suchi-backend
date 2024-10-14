import dotenv from "dotenv";
import express from "express";
const app = express();
const port = 5000;

dotenv.config({
  path: "./.env",
});

// basic endpoint for  testing whether the app is running or not
app.get("/", (req, res) => {
  res.send("App is active");
});

// Express server is actively running backend on this port
app.listen(port, () => {
  console.log(`App running on port http://localhost:${port}`);
});
