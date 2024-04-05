"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validate_fields_1 = require("../middlewares/validate-fields");
const validar_jwt_1 = __importDefault(require("../middlewares/validar-jwt"));
const historialOportunidades_controller_1 = require("../controllers/historialOportunidades.controller");
/**Ruta historial Gestión de oportunidades */
//"path: /api/v1/cliente"
const router = (0, express_1.Router)();
router.post("/", validar_jwt_1.default, [
    (0, express_validator_1.check)("gestion", "la gestion es obligatoria").not().isEmpty(),
    (0, express_validator_1.check)("valorNuevo", "El nuevo valor de la gestión es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("observaciones", "Las observaciones son obligatorias").not().isEmpty(),
    validate_fields_1.validateFields,
], historialOportunidades_controller_1.crearRegistroGestion);
router.get("/:id", historialOportunidades_controller_1.getHistorialOportunidades);
exports.default = router;
//# sourceMappingURL=historialOportunidad.route.js.map