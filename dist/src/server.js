"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// punto de entrada de la aplicación
const express_1 = __importDefault(require("express"));
const connection_1 = require("./database/connection");
const cliente_route_1 = __importDefault(require("./routes/cliente.route"));
const usuario_route_1 = __importDefault(require("./routes/usuario.route"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const producto_route_1 = __importDefault(require("./routes/producto.route"));
const oportunidad_route_1 = __importDefault(require("./routes/oportunidad.route"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.apiPaths = {
            cliente: "/api/v1/cliente",
            usuario: "/api/v1/usuario",
            auth: "/api/v1/auth",
            producto: "/api/v1/producto",
            oportunidad: "/api/v1/oportunidad",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.port || "5000";
        // conección base de datos
        (0, connection_1.dbConnection)();
        // metodos que se ejecutan inicialmente
        this.middlewares();
        //rutas
        this.routes();
    }
    miPrimeraApi() {
        this.app.get("/", (req, res) => res.status(200).json({ msg: "Información" }));
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.miPrimeraApi();
    }
    routes() {
        this.app.use(this.apiPaths.cliente, cliente_route_1.default);
        this.app.use(this.apiPaths.usuario, usuario_route_1.default);
        this.app.use(this.apiPaths.auth, auth_route_1.default);
        this.app.use(this.apiPaths.producto, producto_route_1.default);
        this.app.use(this.apiPaths.oportunidad, oportunidad_route_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en el puerto ", this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map