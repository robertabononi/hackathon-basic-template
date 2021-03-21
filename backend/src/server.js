import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import express from "express";
import "express-async-errors";
import "./database";
import routes from "./routes";

const server = express();
server.use(express.json());
server.use(cors());
server.use(routes);

const { APP_PORT } = process.env;
console.log(`Project starting on ${APP_PORT}`)
server.listen(APP_PORT);
