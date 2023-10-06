import express from "express";

const app = express();

app.get("/", (req, res) => {
   res.send('Hallo von Express');
});

const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`App listening on port ${port}`));