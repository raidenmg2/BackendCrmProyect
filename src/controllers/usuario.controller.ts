import { Request, Response } from "express";
import UsuarioModel from "../models/usuario.model";
import bcrypt from "bcryptjs";

export const crearUsuario = async (req: Request, res: Response) => {
  const { body } = req;
  const { login, password,numeroDocumento } = body;

  try {
    const existeLogin = await UsuarioModel.findOne({
      login: login,
    });
    if (existeLogin) {
      return res.status(409).json({
        ok: false,
        msg: `ya existe un usuario ${login} creado`,
      });
    }
    const existeNumeroDocumento = await UsuarioModel.findOne({
      numeroDocumento: numeroDocumento,
    });
    if (existeNumeroDocumento) {
      return res.status(409).json({
        ok: false,
        msg: `ya existe un usuario con número de documento ${numeroDocumento} creado`,
      });
    }
    const newUsuario = new UsuarioModel({
      ...body,
    });

    const salt = bcrypt.genSaltSync(10);
    newUsuario.password = bcrypt.hashSync(password, salt);
    console.log("contraseña", newUsuario.password);

    const usuarioCreado = await newUsuario.save();

    res.status(200).json({
      ok: true,
      msg: "Usuario creado",
      usuarioCreado,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      ok: false,
      error,
      msg: "Error al crear al usuario, contecte al administrador",
    });
  }
};
