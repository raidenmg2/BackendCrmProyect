import { Router } from "express";
import { crearUsuario } from "../controllers/usuario.controller";
import {check} from "express-validator";
import {validateFields } from "../middlewares/validate-fields"
import validateJWT from "../middlewares/validar-jwt";
/**Ruta cliente */

const router = Router();
router.post("/",
// validateJWT,
[    
check( "nombre", "El nombre es obligatorio").not().isEmpty(),
check("email", "El email es obligatorio").not().isEmpty().isEmail(),
check("tipoDocumento", "El tipo de docuemento es obligatorio").not().isEmpty(),
check("numeroDocumento", "El numero de docuemento es obligatorio").not().isEmpty(),
check("login", "El login obligatorio").not().isEmpty(),
check("password", "El password es obligatorio").not().isEmpty(),
validateFields,
],
crearUsuario);



export default router;
