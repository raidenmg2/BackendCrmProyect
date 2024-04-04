import { Model, Schema, model } from "mongoose";

/**aqui se eindica que información vamos a traer de la base de datos  */
const UsuarioSchema = new Schema({
  nombres: {
    type: String,
    requiered: true,
  },
  apellidos: {
    type: String,
    requiered: true,
  },
  fechaNacimiento: {
    type: String,
    requiered: true,
  },
  ciudadNacimiento: {
    type: String,
    requiered: true,
  },
  tipoDocumento: {
    type: String,
    requiered: true,
  },
  numeroDocumento: {
    type: String,
    requiered: true,
  },
  paisExpedicion: {
    type: String,
    requiered: true,
  },
  ciudadExpedicion: {
    type: String,
    requiered: true,
  },
  fechaExpedicion: {
    type: String,
    requiered: true,
  },
  estadoCivil: {
    type: String,
    requiered: true,
  },
  direccion: {
    type: String,
    requiered: true,
  },
  ciudadResidencia: {
    type: String,
    requiered: true,
  },
  departamentoResidencia: {
    type: String,
    requiered: true,
  },
  telefono: {
    type: Number,
    requiered: true,
  },
  email: {
    type: String,
    requiered: true,
  }, 
  login: { type: String, requiered: true, unique: true },
  password: { type: String, requiered: true },
  rol: { type: String, requiered: true },
  estado: { type: Boolean, requiered: true, default: true },
  createdAt: { type: Date, default: Date.now() },
});

const UsuarioModel: Model<any> = model("usuario", UsuarioSchema);
export default UsuarioModel;
