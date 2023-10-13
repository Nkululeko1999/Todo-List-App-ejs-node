import express from "express";
import { login } from "../controllers/auth.controller.js";
import path from "path";
import bodyParser from "body-parser";
import { signup } from "../controllers/auth.controller.js";

const router = express();
const __dirname = path.resolve();

router.use(express.static("../client/public"));
router.use(bodyParser.urlencoded({extended: true}));
router.set('views', path.join(__dirname, '../client/views'));
router.set('view engine', 'ejs');


router.get('/login', login);
router.get('/signup', signup);

export default router;