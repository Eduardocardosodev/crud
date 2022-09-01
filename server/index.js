const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createPool({
    host: "localhost",
    user: "Eduardo",
    password: "1234",
    database: "testepratico"
});


app.post("/createContainer", (req, res) => {

    const { clientName } = req.body;
    const { numContainer } = req.body;
    const { type } = req.body;
    const { status } = req.body;
    const { category } = req.body;

    let SQL = "INSERT INTO createcontainer (clientName, numContainer, type, status, category) VALUES(?,?,?,?,?)";

    db.query(SQL, [clientName, numContainer, type, status, category], (err, result) => {
        err ? console.log(err) : res.send(result)
    })
});

app.get("/getContainer", (req, res) => {

    let SQL = "SELECT * FROM createcontainer";

    db.query(SQL, (err, result) => {
        err ? console.log(err) : res.send(result)
    })
});

app.put("/edit", (req, res) => {

    const { id } = req.body;
    const { clientName } = req.body;
    const { numContainer } = req.body;
    const { type } = req.body;
    const { status } = req.body;
    const { category } = req.body;

    let SQL = "UPDATE createcontainer SET clientName = ?, numContainer = ?, type = ?, status = ?, category = ? WHERE idCreateContainer";

    db.query(SQL, [clientName, numContainer, type, status, category, id], (err, result) => {
        err ? console.log(err) : res.send(result)
    })
});

app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;

    let SQL = "DELETE FROM createcontainer WHERE idCreateContainer";

    db.query(SQL, [id], (err, result) => {
        err ? console.log(err) : res.send(result)
    })
});


const port = 3001;

app.listen(port, () => console.log(`Rodando server na porta ${port}`))