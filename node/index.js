const express = require("express");

//const axios = require("axios").default;

const app = express();

const port = 3000;

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const mysql = require("mysql");

async function readTable(res) {
  const connection = mysql.createConnection(config);

  const sql = `SELECT id, name FROM people`;

  connection.query(sql, (error, results) => {
    if (error) {
      throw error;
    }

    let table = "<table>";
    table += "<tr><th>ID</th><th>NOME</th></tr>";
    for (let people of results) {
      table += `<tr><td>${people.id}</td><td>${people.name}</td></tr>`;
    }

    table += "</table>";
    res.send("<h1>Full Cycle Rocks!</h1>" + table);
  });
  connection.end();
}

function randomName() {
  const names = [
    "Matheus",
    "Thais",
    "Maria",
    "Jose",
    "Gabriel",
    "Joao",
    "Lucia",
    "Ivan",
    "Victor",
  ];
  return names[Math.floor(Math.random() * names.length)];
}

async function randomNameV2() {
  const RANDOM = Math.floor(Math.random() * 10);
  const response = await axios.get("https://swapi.dev/api/people");
  personName = response.data.results;
  return personName[RANDOM].name;
}

async function insertTable(res) {
  const name = await randomName();
  const connection = await mysql.createConnection(config);

  const sql = `INSERT INTO people(name) values('${name}')`;
  //const sql = `INSERT INTO people(name) values('Matheus')`;
  connection.query(sql);
  connection.end();

  readTable(res);
}

app.get("/", (req, res) => {
  insertTable(res);
});

app.listen(port, () => {
  console.log("Rodando na porta: " + port);
});
