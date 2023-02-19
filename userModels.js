import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const user = db.define('users', {
    nama: DataTypes.STRING,
    judul: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
}, {
    freezeTableName: true
})

export default user;

(async()=>{
    await db.sync()
})();