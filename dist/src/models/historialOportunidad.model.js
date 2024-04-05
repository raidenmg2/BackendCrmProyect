"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cambioHistorialSchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Usuario",
        required: true
    },
    oportunidadId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'oportunidad',
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now(),
    },
});
const GestionOportunidadModel = (0, mongoose_1.model)('CambioHistorial', cambioHistorialSchema);
exports.default = GestionOportunidadModel;
//# sourceMappingURL=historialOportunidad.model.js.map