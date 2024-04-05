"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHistorialOportunidades = exports.crearRegistroGestion = void 0;
const historialOportunidad_model_1 = __importDefault(require("../models/historialOportunidad.model"));
const crearRegistroGestion = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const id = req._id;
    try {
        console.log('id', id);
        console.log('body', body);
        const nuevoEstado = new historialOportunidad_model_1.default(Object.assign({ usuario: id, oportunidad: id }, body));
        const EstadoCreado = yield nuevoEstado.save();
        resp.status(200).json({
            ok: true,
            msg: "Producto creado satisfactoriamente",
            cliente: EstadoCreado,
        });
    }
    catch (error) {
        console.log(error);
        resp.status(400).json({
            ok: false,
            msg: "Error al crear la oportunidad",
        });
    }
});
exports.crearRegistroGestion = crearRegistroGestion;
const getHistorialOportunidades = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //  Devuelve el listado de productos con la información del usuario que lo creo
        const idOportunidad = req.params.idOportunidad;
        const historial = yield historialOportunidad_model_1.default.find({ oportunidadId: idOportunidad }).sort({ fecha: -1 }).populate({
            path: "usuario",
            select: "nombres numeroDocumento email",
        });
        resp.json({
            ok: true,
            historial,
        });
    }
    catch (error) {
        resp.status(400).json({
            ok: false,
            msg: `Error al consultar el producto`,
        });
    }
});
exports.getHistorialOportunidades = getHistorialOportunidades;
//# sourceMappingURL=historialOportunidades.controller.js.map