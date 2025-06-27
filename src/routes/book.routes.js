import { Router } from "express";
import {
    getBooks,
    getAllBooks,
    createBooks,
    updateBooks,
    deleteBooks
} from "../controllers/book.controllers.js";

const bookRoutes = Router();

bookRoutes.get("/books/:id", getBooks);
bookRoutes.put("/books/:id", updateBooks);
bookRoutes.post("/books", createBooks);
bookRoutes.get("/books", getAllBooks);
bookRoutes.delete("/books", deleteBooks);

export default bookRoutes;


