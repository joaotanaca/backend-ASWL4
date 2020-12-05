const Cliente = require("../models/cliente");
const status = require("http-status");

exports.Insert = (req, res, next) => {
    const { nome, salario, dataNascimento, ativo } = req.body;

    Cliente.create({
        nome,
        salario,
        dataNascimento,
        ativo,
    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then((usuario) => {
            if (usuario) {
                res.status(status.OK).send(usuario);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch((error) => next(error));
};
