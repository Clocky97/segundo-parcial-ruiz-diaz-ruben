import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";

const books = sequelize.define("books", {
    id: {type: DataTypes.INTEGER, allowNull: false, autoIncrement: true} 
}
)