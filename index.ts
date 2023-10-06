import express from "express";
import {usersData} from "./data/users";

const app = express();

app.get("/", (req, res) => {
   res.send('<a href="/users">users</a>');
});

app.get("/users", (req, res) => {
   res.json(usersData);
});

const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`App listening on port ${port}`));