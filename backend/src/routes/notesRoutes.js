import express from "express";
import { getAllNotes, createNote,  updateNote, deleteNote, getSpecificNote} from "../controllers/notesController.js";
const router = express.Router();

// controllers

router.get("/", getAllNotes);
router.get("/:id", getSpecificNote); // To fetch a specific note
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
