"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFields = void 0;
const express_validator_1 = require("express-validator");
const validateFields = (req, res, next) => {
    const errores = (0, express_validator_1.validationResult)(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errores: errores.mapped(),
        });
    }
    next();
};
exports.validateFields = validateFields;
//# sourceMappingURL=validate-fields.js.map