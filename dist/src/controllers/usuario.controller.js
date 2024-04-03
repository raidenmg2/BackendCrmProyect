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
exports.crearUsuario = void 0;
const usuario_model_1 = __importDefault(require("../models/usuario.model"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const crearUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { login, password, numeroDocumento } = body;
    try {
        const existeLogin = yield usuario_model_1.default.findOne({
            login: login,
        });
        if (existeLogin) {
            return res.status(409).json({
                ok: false,
                msg: `ya existe un usuario ${login} creado`,
            });
        }
        const existeNumeroDocumento = yield usuario_model_1.default.findOne({
            numeroDocumento: numeroDocumento,
        });
        if (existeNumeroDocumento) {
            return res.status(409).json({
                ok: false,
                msg: `ya existe un usuario con número de documento ${numeroDocumento} creado`,
            });
        }
        const newUsuario = new usuario_model_1.default(Object.assign({}, body));
        const salt = bcryptjs_1.default.genSaltSync(10);
        newUsuario.password = bcryptjs_1.default.hashSync(password, salt);
        console.log("contraseña", newUsuario.password);
        const usuarioCreado = yield newUsuario.save();
        res.status(200).json({
            ok: true,
            msg: "Usuario creado",
            usuarioCreado,
        });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({
            ok: false,
            error,
            msg: "Error al crear al usuario, contecte al administrador",
        });
    }
});
exports.crearUsuario = crearUsuario;
//# sourceMappingURL=usuario.controller.js.map