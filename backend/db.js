const mysql = require("mysql");
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'mysql',
    user: 'root',
    password: 'temppassword',
    database: 'myapp',
    client: {
        webSocketURL: { hostname: undefined, pathname: undefined, port: '0' },
      },
    port:3306
});
exports.pool = pool;