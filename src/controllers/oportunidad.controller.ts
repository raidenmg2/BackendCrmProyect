import { Request, Response } from "express";
import { CustomRequest } from "../middlewares/validar-jwt";
import OportunidadModel from "../models/oportunidad.model";

export const crearOportunidad = async (req: CustomRequest, resp: Response) => {
  const { body } = req;
  const id = req._id;
  try {
    const oportuidadNueva = new OportunidadModel({ usuario: id, ...body });
    const oportunidadCreada = await oportuidadNueva.save();

    resp.status(200).json({
      ok: true,
      msg: "Oportunidad creada satisfactoriamente",
      cliente: oportunidadCreada,
    });
  } catch (error) {
    console.log(error);
    resp.status(400).json({
      ok: false,
      msg: "Error al crear oportunidad",
    });
  }
};

export const getOportunidades = async (req: Request, resp: Response) => {
  try {
    //  Devuelve el listado de las oportunidades con la información del usuario que lo creo
    const oportunidad = await OportunidadModel.find().populate({
      path: "usuario",
      select: " nombre numeroDocumento email",
    });

    resp.json({
      ok: true,
      oportunidad,
    });
  } catch (error) {
    resp.status(400).json({
      ok: false,
      msg: `Error al consultar la oportunidad`,
    });
  }
};


export const updateOportunidad = async (req: Request, resp: Response) => {
  try {
    // id oportunidad
    const id = req.params.id;
    const { body } = req;
    // Tambien se puede decalrar de la siguiente forma const body = req.body;

    // console.log('Esto es el Id', id);
    // actualizar cliente

    const oportunidadActualizo = await OportunidadModel.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );
    resp.status(200).json({
      ok: true,
      usuario: oportunidadActualizo,
    });
  } catch (error) {
    resp.status(400).json({
      ok: false,
      msn: `Error al actualizar oportunidad {$error}`,
    });
  }
};
