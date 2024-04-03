import { Model, Schema, model } from "mongoose";

const ClienteSchema = new Schema({
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
    type:String,
    requiered: true,
},  tipoDocumento: {
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
  actividadEconomica: {
    type: String,
    requiered: true,
  }, 
  estado: {
    type: Boolean,
    requiered: true,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updateAt: {
    type: Date,
    default: Date.now(),
  },
});

const ClienteModel: Model<any>= model("clientes", ClienteSchema);
 export default ClienteModel;
