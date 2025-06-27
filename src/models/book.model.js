import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";

const books = Sequelize.define("books", {
    id: {type: DataTypes.INTEGER, allowNull: false, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    pages: {type: DataTypes.INTEGER, allowNull: false},
    genre: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: true}
}
);