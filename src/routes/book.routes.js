import { Router } from "express";
import {
    getBook,
    getAllBooks,
    createBooks,
    updateBooks,
    deleteBooks
} from "../controllers/book.controllers.js";

const bookRoutes = Router();

bookRoutes.get("/book/id:", getBook);
bookRoutes.put("/book/id:", updateBooks);
bookRoutes.post("/book", createBooks);
bookRoutes.get("/book", getAllBooks);
bookRoutes.destroy("/book", deleteBooks);

export default bookRoutes;


