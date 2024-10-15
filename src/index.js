import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

try {
  // Express server is actively running backend on this port
  app.listen(process.env.PORT || 8000, () => {
    console.log(`app serving on ${process.env.PORT}`);
  });
} catch (error) {
  // log's error in the connection
  console.log("Failed to start the express server", error);
}
