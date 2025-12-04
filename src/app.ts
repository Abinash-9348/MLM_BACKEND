import express from "express";
import  { db_connect } from "./config/db";  // correct import
import { userrouter } from "./Users/Routes/user.routes";
 import { logger } from "./utility/logger";

const app = express();
app.use(express.json());

db_connect();

// Register routes
app.use("/", userrouter);

// Start server
app.listen(8000, () => {
  logger.info("Server running on port 8000");
});
