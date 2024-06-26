"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
/**aqui se le indica que información vamos a traer de la base de datos  */
const ProductoSchema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String },
    precio: { type: Number, required: true },
    categoria: { type: String, required: true },
    caracteristicasTecnicas: { type: Object, required: true },
    caracteristicasFiscas: { type: Object, required: true },
    distribuidor: { type: Object, required: true },
    usuario: { type: mongoose_1.Schema.Types.ObjectId, ref: "usuario", required: true },
    estado: { type: Boolean, required: true, default: true },
    createdAt: { type: Date, default: Date.now() },
});
const ProductoModel = (0, mongoose_1.model)("producto", ProductoSchema);
exports.default = ProductoModel;
//# sourceMappingURL=producto.model.js.map