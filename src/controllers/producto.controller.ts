import { Request, Response } from "express";
import ProductoModel from "../models/producto.model";
import { CustomRequest } from "../middlewares/validar-jwt";


export const crearProducto = async (req: CustomRequest, resp: Response) => {
  const { body } = req;
  const id = req._id;
  try {
    const productoNuevo = new ProductoModel({ usuario: id, ...body });
    const productoCreado = await productoNuevo.save();

    resp.status(200).json({
      ok: true,
      msg: "Producto creado satisfactoriamente",
      cliente: productoCreado,
    });
  } catch (error) {
    console.log(error);
    resp.status(400).json({
      ok: false,
      msg: "Error al crear el producto",
    });
  }
};

export const getProductos = async (req: Request, resp: Response) => {
  try {
    //  Devuelve el listado de productos con la información del usuario que lo creo
    const productos = await ProductoModel.find().populate({
      path: "usuario",
      select: "email",
    });

    resp.json({
      ok: true,
      productos,
    });
  } catch (error) {
    resp.status(400).json({
      ok: false,
      msg: `Error al consultar el producto`,
    });
  }
};
