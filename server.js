import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 8080;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.listen(port, () => {
    console.log(`Server running on ${port}`);
});