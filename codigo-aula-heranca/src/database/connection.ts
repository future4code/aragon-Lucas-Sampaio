import knex from "knex"
import dotenv from "dotenv"

dotenv.config()

const connection = knex({
   client: "mysql",
   connection: {
      host: 35.226.146.116
      port: 3306,
      user: aragon-lucas-sampaio
      password: fA0R4tJuJyPI8fUpomW6
      database: aragon-lucas-sampaio
      multipleStatements: true
   },
});

export default connection