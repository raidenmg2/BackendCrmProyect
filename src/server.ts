// punto de entrada de la aplicación
import express, { Application, Request, Response } from "express";
import { dbConnection } from "./database/connection";
import  clienteRoutes  from "./routes/cliente.route";
import  usuarioRoutes  from "./routes/usuario.route";
import  authRoutes  from "./routes/auth.route";
import productoRoutes from "./routes/producto.route"; 
import oportunidadRoutes from "./routes/oportunidad.route"; 
import cors from "cors";

class Server {
  private app: Application;
  // puerto por donde escucha peticiones la Api
  private port: string;
  private apiPaths = {
    cliente: "/api/v1/cliente",
    usuario:"/api/v1/usuario",
    auth: "/api/v1/auth",
    producto: "/api/v1/producto",
    oportunidad: "/api/v1/oportunidad",
  };

  constructor() {
    this.app = express();
    this.port = process.env.port || "5000";

    // conección base de datos
    dbConnection();
     // metodos que se ejecutan inicialmente
    this.middlewares();
    //rutas
    this.routes();
  }

  miPrimeraApi() {
    this.app.get("/", (req: Request, res: Response) =>
      res.status(200).json({ msg: "Información" })
    );
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.miPrimeraApi();
  }
  routes(): void {
    this.app.use(this.apiPaths.cliente, clienteRoutes);
    this.app.use(this.apiPaths.usuario, usuarioRoutes);
    this.app.use(this.apiPaths.auth, authRoutes)
    this.app.use(this.apiPaths.producto, productoRoutes);
    this.app.use(this.apiPaths.oportunidad, oportunidadRoutes);
  }
  listen(): void {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto ", this.port);
    });
  }
}

export default Server;
