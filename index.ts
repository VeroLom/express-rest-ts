import express from "express";
import {Database} from "./modules/db";

// DB
interface User {
   id: number;
   name: string;
   login: string;
   email: string;
   phone?: string;
}

export enum BewerbungStatus {
   STATUS_NEW = "STATUS_NEW",
   STATUS_SENT = "STATUS_SENT",
   STATUS_RESULT_POSITIVE = "STATUS_RESULT_POSITIVE",
   STATUS_RESULT_NEGATIVE = "STATUS_RESULT_NEGATIVE",
   STATUS_RESULT_POSITION_CLOSED = "STATUS_RESULT_POSITION_CLOSED",
}

export interface Bewerbung {
   id: number;
   status: BewerbungStatus;
   company: string;
   city: string;
   position: string;
   sendDate?: string;
   responseDate?: string;
   note?: string;
   link: string;
}

interface DB {
   users?: User[];
   bewerbungs?: Bewerbung[];
}

const initial: DB = { users: [], bewerbungs: [] };
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
   res.send('<a href="/users">users</a><a href="/bewerbungs">bewerbungs</a>');
});

app.get("/users", (req, res) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.json(db.data.users);
});

app.get("/bewerbungs", (req, res) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.json(db.data.bewerbungs);
});

const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`App listening on port ${port}`));