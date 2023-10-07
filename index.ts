import express from "express";
import {Database} from "./modules/db";

// DB
interface User {
   id: number;
   name: string;
   login: string;
   phone: string;
}
interface DB {
   users: User[];
}
const initial: DB = { users: [] };
const db = new Database<DB>("./data/db.json", initial);
/*db.update({
   users: []
})*/
// /DB


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
   res.json(db.data.users);
});

const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`App listening on port ${port}`));