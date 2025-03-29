import { Sequelize } from "sequelize";

const db = new Sequelize("note_karten", "carstenz", "", {
    host: "34.101.109.72",
    dialect: "mysql",
})

export default db