import { db_connect } from './../db/connectDB';
import app from "./app";

import config from "../config/index";
import log from '../src/utils/logger';

const start = async () => {
  try {

    await db_connect();
    log.info("DB Connected");


    app.listen(config.PORT, () => {
      log.info(`Server running at http://localhost:${config.PORT}`);
    });
  } catch (err: any) {
    log.error("Startup error:", err);
    process.exit(1);
  }
};

start();
