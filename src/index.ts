import express, { json, urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { api } from "./api/routes";
import { getErrorMessage } from "./api/utils";

//Init server app
const app = express();

//Constants
const PORT = Number(process.env.PORT) || 8081;

dotenv.config();

//cors middleware config
app.use(cors());
app.use(json({}));
app.use(urlencoded({ extended: false }));

app.use("/api", api);

const init = async () => {
  try {
    app
      .listen(PORT, () => {
        console.log(`App is running on port:${PORT}`);
      }) //   Fix the Error EADDRINUSE
      .on("error", () => {
        process.once("SIGUSR2", () => {
          process.kill(process.pid, "SIGUSR2");
        });
        process.on("SIGINT", () => {
          // this is only called on ctrl+c, not restart
          process.kill(process.pid, "SIGINT");
        });
      });
  } catch (error) {
    console.log(getErrorMessage(error));
  }
};

init();
