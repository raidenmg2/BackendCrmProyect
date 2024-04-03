"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const express_validator_1 = require("express-validator");
const validate_fields_1 = require("../middlewares/validate-fields");
const validar_jwt_1 = __importStar(require("../middlewares/validar-jwt"));
/**Ruta autenticación */
/**path: /api/v1/auth */
const router = (0, express_1.Router)();
router.post("/", [
    (0, express_validator_1.check)("login", "El login obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("password", "El password es obligatorio").not().isEmpty(),
    validate_fields_1.validateFields,
], auth_controller_1.login);
router.get("/", validar_jwt_1.default, auth_controller_1.renewToken);
// Ruta olvdo contraseña
// Archivo auth.route.ts
router.post("/olvidocontrasena", [
    (0, express_validator_1.check)("login", "El login es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("numeroDocumento", "El password es obligatorio").not().isEmpty(),
    validate_fields_1.validateFields,
], auth_controller_1.olvidoContrasena);
router.put("/cambiocontrasena", validar_jwt_1.validateJWTPass, [
    (0, express_validator_1.check)("password", "El password es obligatorio").not().isEmpty(),
    validate_fields_1.validateFields,
], auth_controller_1.cambioContrasena);
exports.default = router;
//# sourceMappingURL=auth.route.js.map