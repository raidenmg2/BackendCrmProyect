import { Request, Response } from "express";
import clienteModel from "../models/cliente.model";
import ClienteModel from "../models/cliente.model";
import OportunidadModel from "../models/oportunidad.model";


/**se crea el cliente  */
export const crearClientes = async (req: Request, res: Response) => {
  const { body } = req;
  const { numeroDocumento } = body;
  try {
    console.log(req);
    console.log(body);
    const clienteNuevo = new ClienteModel(body);
    const clienteCreado = await clienteNuevo.save();

    // const existeNumeroDocumento = await ClienteModel.findOne({
    //   numeroDocumento: numeroDocumento,
    // });
    // if (existeNumeroDocumento) {
    //   return res.status(409).json({
    //     ok: false,
    //     msg: `ya existe un cliente con número de documento ${numeroDocumento} creado`,
    //   });
    // }

    res.status(200).json({
      ok: true,
      msg: "Cliente registrado",
      cliente: clienteCreado,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      ok: false,
      msg: "Error al crear al cliente",
    });
  }
};

/**busca todos los clientes de la base de datos */
export const getClientes = async (req: Request, resp: Response) => {
  try {

    /**El busca todos los clientes */
    const clientes = await ClienteModel.find();
    resp.status(200).json({
      ok: true,
      clientes,
    });
  } catch (error) {
    resp.status(400).json({
      ok: false,
      msn: `Error al buscar al cliente {$error}` ,
    });


  }
};

/** buscar un cliente en particular */
export const getUnCliente = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;

    const clientes = await ClienteModel.findById({_id:id});
    resp.status(200).json({
      ok: true,
      clientes,
      
    });
  } catch (error) {
    resp.status(400).json({
      ok: false,
      msn: `Error al buscar al cliente {$error}` ,
    });


  }
};

/**se actualiza la información de un cliente */
export const updateCliente = async (req: Request, resp: Response) => {
  try {
    // id cliente
    const id = req.params.id;
    const {body} = req;
    // Tambien se puede decalrar de la siguiente forma const body = req.body;

    // console.log('Esto es el Id', id);
    // actualizar cliente

    const clienteActualizo = await ClienteModel.findByIdAndUpdate(id, body,{ new:true},);
    resp.status(200).json({
      ok: true,
      clientes:clienteActualizo, 
    });
  } catch (error) {
    resp.status(400).json({
      ok: false,
      msn: `Error al buscar al cliente {$error}` ,
    });


  }
};

/** se elimina a un cliente  */
export const deleteCliente = async (req: Request, resp: Response) => {
  try {
    // id cliente
    const id = req.params.id;
    // const {body} = req;
    // Tambien se puede decalrar de la siguiente forma const body = req.body;

    // console.log('Esto es el Id', id);
    // Eliminar cliente

    const clienteElimino = await ClienteModel.findByIdAndDelete(id);
    resp.status(200).json({
      ok: true,
      clientes:clienteElimino, 
    });
  } catch (error) {
    resp.status(400).json({
      ok: false,
      msn: `Error al buscar al cliente {$error}` ,
    });


  }
};

// actualizar estado

export const updatEstadoCliente = async (req: Request, resp: Response) => {
  try {
    // id cliente
    const id = req.params.id;
    // const {body} = req;
    // Tambien se puede decalrar de la siguiente forma const body = req.body;

    // console.log('Esto es el Id', id);
    // actualizar cliente

    const clientEstadoActualizo = await ClienteModel.findByIdAndUpdate(id, {estado: false}, {new: true});
    resp.status(200).json({
      ok: true,
      clientes:clientEstadoActualizo, 
    });
  } catch (error) {
    resp.status(400).json({
      ok: false,
      msn: `Error al buscar al cliente {$error}` ,
    });


  }
};

export const getHistorialOportunidades = async (req: Request, resp: Response) => {
  try {
    const clienteId = req.params.id ;
    const historialOportunidades = await OportunidadModel.find({'cliente._id': clienteId});
    console.log('id', clienteId)
    resp.status(200).json({
      ok: true,
      oportunidades: historialOportunidades,
      
    });
  } catch (error) {
    resp.status(400).json({
      ok: false,
      msn: `Error al buscar historial de  oportunidades` ,
    });


  }
};