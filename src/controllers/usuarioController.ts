import { Request, Response, NextFunction } from "express";
// Define a utilização do model usuario e a dependência http-status
import Usuario from "../models/usuario";
import status from "http-status";

class UsuarioController {
  // Cria o método Insert, obtendo os dados da request
  public insertUser(req: Request, res: Response, next: NextFunction) {
    const { nome, salario, dataNascimento, ativo } = req.body;

    // Popula cada um dos campos do model com os campos recebido na request
    Usuario.create({
      nome: nome,
      salario: salario,
      dataNascimento: dataNascimento,
      ativo: ativo,
    })
      //then = registra o que queremos que aconteca quando a Promise for resolvida
      .then((usuario: any) => {
        if (usuario) {
          res.status(status.OK).send(usuario);
        } else {
          res.status(status.NOT_FOUND).send();
        }
      })
      //catch = registra o que queremos que aconteca quando a Promise falhar
      .catch((error: any) => next(error));
  }
}

export default new UsuarioController();
