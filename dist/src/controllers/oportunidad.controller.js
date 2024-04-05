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
exports.getUnaOportunidad = exports.updateOportunidad = exports.getOportunidades = exports.crearOportunidad = void 0;
const oportunidad_model_1 = __importDefault(require("../models/oportunidad.model"));
const crearOportunidad = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const id = req._id;
    try {
        const oportuidadNueva = new oportunidad_model_1.default(Object.assign({ usuario: id }, body));
        const oportunidadCreada = yield oportuidadNueva.save();
        resp.status(200).json({
            ok: true,
            msg: "Oportunidad creada satisfactoriamente",
            cliente: oportunidadCreada,
        });
    }
    catch (error) {
        console.log(error);
        resp.status(400).json({
            ok: false,
            msg: "Error al crear oportunidad",
        });
    }
});
exports.crearOportunidad = crearOportunidad;
const getOportunidades = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //  Devuelve el listado de las oportunidades con la información del usuario que lo creo
        const oportunidad = yield oportunidad_model_1.default.find().populate({
            path: "usuario",
            select: " nombres numeroDocumento email",
        });
        resp.json({
            ok: true,
            oportunidad,
        });
    }
    catch (error) {
        resp.status(400).json({
            ok: false,
            msg: `Error al consultar la oportunidad`,
        });
    }
});
exports.getOportunidades = getOportunidades;
const updateOportunidad = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // id oportunidad
        const id = req.params.id;
        const { body } = req;
        console.log('body', body);
        // Tambien se puede decalrar de la siguiente forma const body = req.body;
        // console.log('Esto es el Id', id);
        // actualizar cliente
        const oportunidadActualizada = yield oportunidad_model_1.default.findByIdAndUpdate(id, body, { new: true });
        console.log('Oportunidad act ', oportunidadActualizada);
        resp.status(200).json({
            ok: true,
            usuario: oportunidadActualizada,
        });
    }
    catch (error) {
        resp.status(400).json({
            ok: false,
            msn: `Error al actualizar oportunidad {$error}`,
        });
    }
});
exports.updateOportunidad = updateOportunidad;
const getUnaOportunidad = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        // console.log('Esto es el Id', id);
        // console.log('Esto es el Id', req);
        /**El busca un cliente */
        const oportunidades = yield oportunidad_model_1.default.findById({ _id: id });
        resp.status(200).json({
            ok: true,
            oportunidades: oportunidades,
        });
    }
    catch (error) {
        resp.status(400).json({
            ok: false,
            msn: `Error al buscar la oportunidad`,
        });
    }
});
exports.getUnaOportunidad = getUnaOportunidad;
//# sourceMappingURL=oportunidad.controller.js.map