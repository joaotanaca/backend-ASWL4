import http from "http";
import express, { Request, Response } from "express";
import status from "http-status";
import sequelize from "./database/database";
import routes from "./routes/routes";
import cors from "cors";
import * as dotenv from "dotenv";

const app = express();

dotenv.config({ path: __dirname + "/.env" });

app.use(express.json());

app.use(cors());

app.use("/sistema", routes);

app.use((req: Request, res: Response) => {
  res.status(status.NOT_FOUND).send("Page not found");
});

app.use((req: Request, res: Response) => {
  res.status(status.INTERNAL_SERVER_ERROR).json({ Error });
});

sequelize.sync({ force: false }).then(() => {
  const port = 3003;
  app.set("port", port);
  const server = http.createServer(app);
  server.listen(port);
});
