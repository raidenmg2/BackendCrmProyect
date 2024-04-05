import { Model, Schema, model } from "mongoose";

const cambioHistorialSchema = new Schema({
  gestion: {
    type: String,
    required: true
  },
  valorAnterior: {
    type: String,
    required: true
  },
  valorNuevo: {
    type: String,
    required: true
  },
  observaciones: {
    type: String,
    required: true
  },
  usuario: {
   type: Schema.Types.ObjectId,
    ref: "Usuario", 
    required: true },

  oportunidadId: {
    type: Schema.Types.ObjectId,
    ref: 'oportunidad',
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now(),
  },


});

const GestionOportunidadModel: Model<any> = model('CambioHistorial', cambioHistorialSchema);

export default GestionOportunidadModel;
