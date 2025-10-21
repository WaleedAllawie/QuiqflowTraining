import express from "express";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import process from "process";
const app = express();
const port = process.env.PORT || 8000;
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";
import notFound from "./middleware/notFound.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

//BODY PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//logger
app.use(logger);
//routes
app.use("/api/posts", posts);

//middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is running on port 8000`);
});
