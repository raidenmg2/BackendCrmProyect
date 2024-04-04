"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validate_fields_1 = require("../middlewares/validate-fields");
const validar_jwt_1 = __importDefault(require("../middlewares/validar-jwt"));
const oportunidad_controller_1 = require("../controllers/oportunidad.controller");
const router = (0, express_1.Router)();
router.post("/", validar_jwt_1.default, [
    (0, express_validator_1.check)("oportunidad", "El nombre de la oportunidad es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("cliente", "El cliente es obligatorio en la oportunidad").not().isEmpty(),
    (0, express_validator_1.check)("producto", "El producto es obligatorio").not().isEmpty(),
    validate_fields_1.validateFields,
], oportunidad_controller_1.crearOportunidad);
router.get("/", validar_jwt_1.default, oportunidad_controller_1.getOportunidades);
router.put("/:id", validar_jwt_1.default, oportunidad_controller_1.updateOportunidad);
exports.default = router;
//# sourceMappingURL=oportunidad.route.js.map