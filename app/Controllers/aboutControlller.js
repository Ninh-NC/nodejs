import connection from "../Config/database.js";
const getAbout = (req, res) => {
  let api = [];
  connection.execute("SELECT * FROM users", function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    api = results;
    res.send(JSON.stringify(api));
  });
};

export { getAbout };
