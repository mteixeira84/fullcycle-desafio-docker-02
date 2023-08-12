const express = require("express");
const axios = require("axios").default;
const mysql = require("mysql");

const app = express();

const port = 3000;

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

app.get("/", (req, res) => {
  insertTable(res);
});

app.listen(port, () => {
  console.log("Rodando na porta: " + port);
});

async function randomName(req, res) {
  const names = [
    "Alexandra",
    "Abraão",
    "Salomão",
    "Yohanna",
    "Catarina",
    "Dilan",
    "Kyle",
    "Mustafa",
    "Messias",
  ];

  const response = await axios.get("https://gerador-nomes.wolan.net/nomes/1");

  if (response.data[0] !== undefined) {
    return response.data[0];
  } else {
    return names[Math.floor(Math.random() * names.length)];
  }
}

async function insertTable(res) {
  const name = await randomName();
  const connection = await mysql.createConnection(config);
  const sql = `INSERT INTO people(name) values('${name}')`;

  connection.query(sql);
  readTable(res, connection);
}

function readTable(res, connection) {
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
