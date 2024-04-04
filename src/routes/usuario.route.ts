import { Router } from "express";
import { crearUsuario, deleteUsuario, getUnUsuarios, getUsuarios, updateUsuario } from "../controllers/usuario.controller";
import {check} from "express-validator";
import {validateFields } from "../middlewares/validate-fields"
import validateJWT from "../middlewares/validar-jwt";
/**Ruta usuario */

const router = Router();
router.post("/",
validateJWT,
[    
 check( "nombres", "El nombre es obligatorio").not().isEmpty(),
 check( "apellidos", "El apellido es obligatorio").not().isEmpty(),
 check( "fechaNacimiento", "La fecha de nacimientno es obligatoria").not().isEmpty(),
 check( "ciudadNacimiento", "La ciudad de nacimientno es obligatoria").not().isEmpty(),
 check("tipoDocumento", "El tipo de documento es obligatorio").not().isEmpty(),
 check("numeroDocumento", "El numero de documento es obligatorio").not().isEmpty(),
 check("paisExpedicion", "El país de expedición del documento es obligatorio").not().isEmpty(),
 check("ciudadExpedicion", "La ciudad de expedición del documento es obligatorio").not().isEmpty(),
 check("fechaExpedicion", "La fecha de expedición del documento es obligatorio").not().isEmpty(),
 check("estadoCivil", "El estado civil es obligatorio").not().isEmpty(),
 check("direccion", "La dirección de residencia es obligatoria").not().isEmpty(),
 check("ciudadResidencia", "La ciudad de residencia es obligatoria").not().isEmpty(),
 check("departamentoResidencia", "El departamento de residencia es obligatoria").not().isEmpty(),
 check("telefono", "El telefono es obligatorio").not().isEmpty(),
check("email", "El email es obligatorio").not().isEmpty().isEmail(),
check("login", "El login obligatorio").not().isEmpty(),
check("password", "El password es obligatorio").not().isEmpty(),
validateFields,
],
crearUsuario);

router.get("/",validateJWT,getUsuarios);
router.get("/:id",validateJWT,getUnUsuarios);
router.delete("/:id",validateJWT,deleteUsuario);
router.put("/:id",validateJWT,updateUsuario);

export default router;
