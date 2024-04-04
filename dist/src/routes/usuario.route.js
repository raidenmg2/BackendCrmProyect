"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = require("../controllers/usuario.controller");
const express_validator_1 = require("express-validator");
const validate_fields_1 = require("../middlewares/validate-fields");
const validar_jwt_1 = __importDefault(require("../middlewares/validar-jwt"));
/**Ruta usuario */
const router = (0, express_1.Router)();
router.post("/", validar_jwt_1.default, [
    (0, express_validator_1.check)("nombres", "El nombre es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("apellidos", "El apellido es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("fechaNacimiento", "La fecha de nacimientno es obligatoria").not().isEmpty(),
    (0, express_validator_1.check)("ciudadNacimiento", "La ciudad de nacimientno es obligatoria").not().isEmpty(),
    (0, express_validator_1.check)("tipoDocumento", "El tipo de documento es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("numeroDocumento", "El numero de documento es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("paisExpedicion", "El país de expedición del documento es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("ciudadExpedicion", "La ciudad de expedición del documento es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("fechaExpedicion", "La fecha de expedición del documento es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("estadoCivil", "El estado civil es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("direccion", "La dirección de residencia es obligatoria").not().isEmpty(),
    (0, express_validator_1.check)("ciudadResidencia", "La ciudad de residencia es obligatoria").not().isEmpty(),
    (0, express_validator_1.check)("departamentoResidencia", "El departamento de residencia es obligatoria").not().isEmpty(),
    (0, express_validator_1.check)("telefono", "El telefono es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("email", "El email es obligatorio").not().isEmpty().isEmail(),
    (0, express_validator_1.check)("login", "El login obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("password", "El password es obligatorio").not().isEmpty(),
    validate_fields_1.validateFields,
], usuario_controller_1.crearUsuario);
router.get("/", validar_jwt_1.default, usuario_controller_1.getUsuarios);
router.get("/:id", validar_jwt_1.default, usuario_controller_1.getUnUsuarios);
router.delete("/:id", validar_jwt_1.default, usuario_controller_1.deleteUsuario);
router.put("/:id", validar_jwt_1.default, usuario_controller_1.updateUsuario);
exports.default = router;
//# sourceMappingURL=usuario.route.js.map