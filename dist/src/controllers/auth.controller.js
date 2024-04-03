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
exports.cambioContrasena = exports.olvidoContrasena = exports.renewToken = exports.login = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const usuario_model_1 = __importDefault(require("../models/usuario.model"));
const jwt_1 = __importDefault(require("../helpers/jwt"));
// función para hacer login y validar login y el password de un usuario
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { login: loginUser, password } = req.body;
    try {
        // verificar el login
        const usuario = yield usuario_model_1.default.findOne({ login: loginUser });
        if (!usuario) {
            return res.status(401).json({
                ok: false,
                msg: "Las credenciales no son validas",
            });
        }
        // verificar el password
        const validarPassword = bcryptjs_1.default.compareSync(password, usuario.password);
        if (!validarPassword) {
            return res.status(400).json({
                ok: false,
                msg: "Las credenciales no son validas",
            });
        }
        console.log(usuario);
        // generar token
        const token = yield (0, jwt_1.default)(usuario._id, usuario.login);
        res.json({
            ok: true,
            usuario: usuario,
            token,
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            error,
            msg: "Hable con el administrador",
        });
    }
});
exports.login = login;
// función que genera un nuevo token, esta sirve para validar información que este en el token , para validar si el token esta activo 
const renewToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req._id;
    try {
        if (typeof id === "undefined") {
            throw new Error("No existe in id");
        }
        const usuario = yield usuario_model_1.default.findById(id);
        /** Generar el token */
        const token = yield (0, jwt_1.default)(id.toString());
        res.json({
            ok: true,
            token,
            usuario,
        });
    }
    catch (error) {
        console.log(error);
        res.status(401).json({
            ok: false,
            error,
            msg: "Error al generar el token, Hable con el administrador",
        });
    }
});
exports.renewToken = renewToken;
/** controlador que valida correo del login y numero de documento cuando el usuario olvida la contraseña */
const olvidoContrasena = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { login, numeroDocumento } = req.body;
    try {
        const existeUsuario = yield usuario_model_1.default.findOne({
            login,
            numeroDocumento,
        });
        if (!existeUsuario) {
            res.status(400).json({
                ok: false,
                msg: "No coinciden sus credenciales",
            });
        }
        const id = existeUsuario === null || existeUsuario === void 0 ? void 0 : existeUsuario._id;
        if (id) {
            // Generar Token
            const token = yield (0, jwt_1.default)(id, login, "1H", process.env.JWT_SECRET_PASS);
            res.status(200).json({
                ok: true,
                msg: "Proceso éxito",
                usuario: existeUsuario,
                token,
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(400).json({
            ok: false,
            msg: "No se logró validar su acceso con éxito, por favor comuniquese con el administrador",
        });
    }
});
exports.olvidoContrasena = olvidoContrasena;
const cambioContrasena = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req._id;
    const { password } = req.body;
    try {
        if (!password) {
            res.status(400).json({
                ok: false,
                msg: "Por favor dígite una contraseña válida",
            });
        }
        const newPassword = bcryptjs_1.default.hashSync(password, 10);
        const actualizarPassword = yield usuario_model_1.default.findByIdAndUpdate({
            _id: id,
            password: newPassword,
        });
        if (!actualizarPassword) {
            res.status(400).json({
                ok: false,
                msg: "Error al actualizar la contraseña",
            });
        }
        res.status(200).json({
            ok: true,
            msg: "Contraseña actualizada",
            usuario: actualizarPassword,
        });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({
            ok: false,
            msg: "Error al actualizar la contraseña, hable con el administrador",
        });
    }
});
exports.cambioContrasena = cambioContrasena;
// export const olvidoContrasena = async (req: Request, res: Response) => {
//   const { login, numeroDocumento } = req.body;
//   console.log("Este es el email del login", login, numeroDocumento);
//   try {
//     // verificar el login
//     const existeUsuario = await UsuarioModel.findOne({
//       login: login,
//       numeroDocumento: numeroDocumento,
//     });
//     console.log("Estos son los datos del usuario", existeUsuario);
//     if (!existeUsuario) {
//       return res.status(401).json({
//         ok: false,
//         msg: "Las credenciales no son validas",
//       });
//     }
//     console.log(existeUsuario);
//     // generar token
//     const token = await generateJWT(existeUsuario._id, existeUsuario.login);
//     res.json({
//       ok: true,
//       usuario: existeUsuario,
//       token,
//     });
//   } catch (error) {
//     res.status(400).json({
//       ok: false,
//       error,
//       msg: "Hable con el administrador",
//     });
//   }
// };
// /**Falta hacer la función que genera la nueva contraseña y se la asigna al usuario */
// export const cambioContrasena = async (req: CustomRequest, res: Response) => {
//   const id = req._id;
//   const { password } = req.body;
//   try {
//     if (!password) {
//       res.status(400).json({
//         ok: false,
//         msg: "Por favor digite euna contraseña valida",
//       });
//     }
//     const newPassword = bcrypt.hashSync(password, 10);
//     const actualizarPassword = await UsuarioModel.findByIdAndUpdate({
//       _id: id,
//       password: newPassword,
//     });
//     if (!actualizarPassword) {
//       res.status(400).json({
//         ok: false,
//         msg: "error al actualizar la contraseña",
//       });
//     }
//     res.status(200).json({
//       ok: true,
//       msg: "Contraseña actualizada",
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({
//       ok: false,
//       msg: "error al actualizar ",
//     });
//   }
// };
//# sourceMappingURL=auth.controller.js.map