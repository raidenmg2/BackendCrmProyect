"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ClienteSchema = new mongoose_1.Schema({
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
    }, tipoDocumento: {
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
const ClienteModel = (0, mongoose_1.model)("clientes", ClienteSchema);
exports.default = ClienteModel;
//# sourceMappingURL=cliente.model.js.map