"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
/**aqui se eindica que información vamos a traer de la base de datos  */
const OportunidadSchema = new mongoose_1.Schema({
    oportunidad: { type: String, requiered: true },
    cliente: { type: Object, requiered: true },
    producto: { type: Object, requiered: true },
    gestion: { type: String, requiered: true },
    usuario: { type: mongoose_1.Schema.Types.ObjectId, ref: "usuario", required: true },
    createdAt: { type: Date, default: Date.now() },
});
const OportunidadModel = (0, mongoose_1.model)("oportunidad", OportunidadSchema);
exports.default = OportunidadModel;
//# sourceMappingURL=oportunidad.model.js.map