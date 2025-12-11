import express, { Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { loadEnv } from "../config/loadEnv";
import { Request, Response } from "express";
//logger
import { requestLogger } from "./utils/middleware/requestLogger";


//routes
import { companyRoutes } from "./company/routes/company.routes";
import { planRoutes } from "./plans/routes/plan.routes";
import { adminRoutes } from "./admin/routes/admin.routes";
import { userRouter } from "./Users/Routes/user.routes";

//middlewares
import deserializeAdmin from "./admin/middlewares/deserializeadmin.middlewares";
import { errorHandler } from "./utils/middleware/errorHandler";





loadEnv();

const app: Application = express();

//CORS ERROR
// app.use(
//   cors({
//     origin: `http://localhost:${config.get<number>("PORT")}`,
//     credentials: true,
//   })
// );

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(deserializeAdmin);
app.use(cookieParser());
app.use(requestLogger);
app.set("trust proxy", true);


//healthcheckroute
app.get("/healthcheck", (_req: Request, res) => {
  res.send("Server healthcheck-status: running");
});

// Routes
app.use('/company', companyRoutes());
app.use('/plan', planRoutes());
app.use('/admin', adminRoutes());
app.use('/',userRouter)


app.use(errorHandler)
export default app;
