"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = require("../controllers/usuario.controller");
const express_validator_1 = require("express-validator");
const validate_fields_1 = require("../middlewares/validate-fields");
/**Ruta cliente */
const router = (0, express_1.Router)();
router.post("/", 
// validateJWT,
[
    (0, express_validator_1.check)("nombre", "El nombre es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("email", "El email es obligatorio").not().isEmpty().isEmail(),
    (0, express_validator_1.check)("tipoDocumento", "El tipo de docuemento es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("numeroDocumento", "El numero de docuemento es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("login", "El login obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("password", "El password es obligatorio").not().isEmpty(),
    validate_fields_1.validateFields,
], usuario_controller_1.crearUsuario);
exports.default = router;
//# sourceMappingURL=usuario.route.js.map