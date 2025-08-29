const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "1418",
  host: "localhost",
  port: 5432,
  database: "SkillSwap",
});

module.exports = pool;
