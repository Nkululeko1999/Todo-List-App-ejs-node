import express from "express";
import bodyParser from "body-parser";
import path from "path";

const app = express();
const port = 4000;
const __dirname = path.resolve();

app.use(express.static("../client/public"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, '../client/views'));
app.set('view engine', 'ejs');


let todos = [
    {
        id: 1,
        todoText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
        id: 2,
        todoText: "There are many variations of passages of Lorem Ipsum available",
    },
    {
        id: 3,
        todoText: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
        id: 4,
        todoText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
        id: 5,
        todoText: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
];

let last_id = 5;

app.get("/", (req, res) =>{
    const dayOfWeek = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    res.render("index.ejs", {
        day : dayOfWeek,
        listOfTodos: todos,
    });
});

app.post("/add-todo", (req, res) => {
    const new_id = last_id + 1;
    const new_todoText = req.body.inputText;

    const new_todo = {
        id: new_id,
        todoText: new_todoText
    };

    todos.push(new_todo);

    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


