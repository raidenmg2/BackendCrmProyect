import { Model, Schema, Types, model } from "mongoose";

interface cliente {
  _id: string,
  nombres: string;
  apellidos: string;
  numeroDocumento: string;
  telefono: number;
  email: string;
}

interface producto {
  nombre: string;
  precio: string;
  categoria: string;
}

interface OportunidadInterface {
  oportunidad: string;
  cliente: cliente;
  producto: producto;
  gestion: string;
  usuario: Types.ObjectId;
  createdAt: Date;
  notasInteraccion: string
}

/**aqui se eindica que información vamos a traer de la base de datos  */
const OportunidadSchema = new Schema<OportunidadInterface>({
  oportunidad: { type: String, requiered: true },
  cliente: { type: Object, requiered: true },
  producto: { type: Object, requiered: true },
  gestion: { type: String, requiered: true },
  usuario: { type: Schema.Types.ObjectId, ref: "usuario", required: true },
  createdAt: { type: Date, default: Date.now() },
  notasInteraccion:{ type: String  },
 
});

const OportunidadModel: Model<OportunidadInterface> =
  model<OportunidadInterface>("oportunidad", OportunidadSchema);
export default OportunidadModel;