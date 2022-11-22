const {Client} = require('pg')

const client = new Client ({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "amelia",
    database: "crud_nodejsamel"
})

module.exports = client