"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
/**aqui se eindica que información vamos a traer de la base de datos  */
const UsuarioSchema = new mongoose_1.Schema({
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
const UsuarioModel = (0, mongoose_1.model)("usuario", UsuarioSchema);
exports.default = UsuarioModel;
//# sourceMappingURL=usuario.model.js.map