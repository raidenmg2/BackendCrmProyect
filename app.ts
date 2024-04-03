import Server from "./src/server";
// libreria para manejo de variables de entorno 
import dotenv from "dotenv";

// configurar .evn variables de entorno
dotenv.config();





// es una instancia de un objeto de la clase server para tener acceso a las funciones de la clase server
const server = new Server();    
server.listen();

