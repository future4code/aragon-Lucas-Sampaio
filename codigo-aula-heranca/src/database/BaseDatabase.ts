import knex from "knex"
import dotenv from "dotenv"

dotenv.config()

export abstract class BaseDatabase {
    protected static connection = knex({
        client: "mysql",
        connection: {
           host: 35.226.146.116
           port: 3306,
           user: aragon-lucas-sampaio
           password: fA0R4tJuJyPI8fUpomW6
           database: aragon-lucas-sampaio
           multipleStatements: true
        },
    })
}