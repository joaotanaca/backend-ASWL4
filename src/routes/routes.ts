import express from "express";
import UsuariosController from "../controllers/usuarioController";
const router = express.Router();

router.post("/usuarios", UsuariosController.insertUser);

export default router;
