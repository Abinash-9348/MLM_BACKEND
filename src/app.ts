import express from "express";
import  { db_connect } from "./config/db";  // correct import
import { userrouter } from "./Users/Routes/user.routes";
 import { logger } from "./utility/logger";
import settingRouter from "./GeneralSetting/routes/generalSetting.routes";
 //import { globalHandler } from "./utility/Globalhandler";

const app = express();
app.use(express.json());

db_connect();
//app.use(globalHandler)
// Register routes
app.use("/", userrouter);
app.use('/',settingRouter)

// Start server
app.listen(8000, () => {
  logger.info("Server running on port 8000");
});
