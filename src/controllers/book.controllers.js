import { Books } from "../models/book.model.js";

export const getBooks = async (req, res) =>{
    const id = res.params.id();
    const books = await Books.findByPk(id);
    if (!books){
        console.log("No se encontró un libro con esa ID.");
    }
    res.json(books);
};

export const getAllBooks = async (req, res) => {
    const books = await Books.findAll();
    res.json(books);
};

export const createBooks = async (req, res) => {
    const {title, author, pages, genre, description} = req.body;
    if (title === "" || author === "" || pages === "" || genre === "") {
        return res.json({
            msg: "Hay campos vacíos",
        });
    }
    if (isNaN(pages)) {
        return res.json({
            msg: "El número de página ingresado no es válido."
        });
    }

  try {
    const existing = await Books.findOne({ where: { title } });

    if (existing) {
      return res.status(400).json({ msg: "Ese titulo ya está en uso." });
    }


    const books = await Books.create(req.body);

    res.status(201).json(books);
    } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al crear el libro." });
  }};

export const updateBooks = async (req, res) =>{
    try {
        const {id} = req.params;
        const updates = req.body;

        const updatedBooks = await Books.findByIdAndUpdate(id, updates);

        if (!updatedBooks) {
            return res.status(404).json({msg: "Libro no encontrado."});
        }
        res.status(200).json(updatedBooks);
    } catch (error) {
        res.status(500).json({msg: "Error al actualizar el libro.", error});
    }
    
};

export const deleteBooks = async (req, res) =>{
    try {
        const {id} = req.params;

        const deletedBooks = await Books.findByIdandDelete(id);

        if (!deletedBooks) {
            return res.status(404).json({msg: "Libro no encontrado."});
        }

        res.status(200).json({msg: "Libro eliminado correctamente."});
    }catch (error){
        res.status(500).json({msg: "Error al eliminar el libro.", error})
    }
};