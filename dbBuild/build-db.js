const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("programs.sqlite");
const { readFileSync } = require("fs");

const progData = JSON.parse(readFileSync("./data/programs.json"));


 const createTables = () => {
  return new Promise((resolve, reject) => {
    db
      .run(`DROP TABLE IF EXISTS programs`)
      .run(
        `CREATE TABLE IF NOT EXISTS programs (_id INTEGER PRIMARY KEY AUTOINCREMENT, no_of_seats INT, instructor_name TEXT, start_date TEXT, end_date TEXT, course_category INT)`,
        err => {
          if (err) return reject(err);
          resolve(insertRows());
        }
      );
  });
};

const insertRows = () => {
  return Promise.all(
    progData.map(
      ({ no_of_seats, instructor_name, start_date, end_date, course_category}) => {
        return new Promise((resolve, reject) => {
          db.run(
            `INSERT INTO programs VALUES (
              null,
              "${no_of_seats}",
              "${instructor_name}",
              "${start_date}",
              "${end_date}",
              "${course_category}"
            )`,
            function(err) {
              if (err) return reject(err);
              resolve(this.lastID);
            }
          );
        });
      }
    )
  );
};

createTables()

module.exports = {createTables};