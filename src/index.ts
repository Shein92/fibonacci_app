import express, { Application } from "express";
import bodyParser, { urlencoded } from "body-parser";
import cors from "cors";
import config from './util/config'
import connectWithRetry from "./util/mongooseInit";
import defaultRouter from './routers/default';

const app: Application = express();
// const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(urlencoded());

connectWithRetry();

app.use(defaultRouter)

app.listen(config.PORT, () => {
  console.log(`Working on port: ${config.PORT}`);
});
