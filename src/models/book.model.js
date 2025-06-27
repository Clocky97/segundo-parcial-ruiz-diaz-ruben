import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const Books = sequelize.define("book", {
    "id": {primaryKey: true, type: DataTypes.INTEGER, allowNull: false, autoIncrement: true},
    "title": {type: DataTypes.STRING, allowNull: false},
    "pages": {type: DataTypes.INTEGER, allowNull: false},
    "genre": {type: DataTypes.STRING, allowNull: false},
    "description": {type: DataTypes.STRING, allowNull: true}
}
);