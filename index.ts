import express from "express";
import {usersData} from "./data/users";

const app = express();
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

app.get("/", (req, res) => {
   res.send('<a href="/users">users</a>');
});

app.get("/users", (req, res) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.json(usersData);
});

const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`App listening on port ${port}`));