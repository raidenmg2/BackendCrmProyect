"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./src/server"));
// libreria para manejo de variables de entorno 
const dotenv_1 = __importDefault(require("dotenv"));
// configurar .evn variables de entorno
dotenv_1.default.config();
// es una instancia de un objeto de la clase server para tener acceso a las funciones de la clase server
const server = new server_1.default();
server.listen();
//# sourceMappingURL=app.js.map