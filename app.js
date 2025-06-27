import express from "express";
import { startDB } from "./src/config/database.js";
import dotenv from "dotenv";
import bookRoutes from "./src/routes/book.routes.js";
dotenv.config();

 const app = express();
 const PORT = process.env.PORT || 1212;

app.use(express.json());

app.use("/api", bookRoutes);

startDB();

app.listen(PORT, ()=>{
    console.log("Servidor en funcionamiento.")
});S