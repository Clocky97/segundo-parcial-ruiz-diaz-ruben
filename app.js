import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 1212;
server.listen(PORT, ()=> {
    console.log(`servidor funcionando en: ${PORT}.`);
}

)