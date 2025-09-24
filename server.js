import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// (Optional) for JSON request bodies
app.use(bodyParser.json());

// If you need __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))



app.get('/', (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});



