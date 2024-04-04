import { Router } from "express";
import { crearClientes , deleteCliente, getClientes, getUnCliente, updatEstadoCliente, updateCliente } from "../controllers/cliente.controler";
import {check} from "express-validator";
import { validateFields } from "../middlewares/validate-fields";
import validateJWT from "../middlewares/validar-jwt";

/**Ruta cliente */
//"path: /api/v1/cliente"

const router = Router();
router.post("/", 
validateJWT,
[    
check( "nombres", "El primer nombre es obligatorio").not().isEmpty(),
check( "apellidos", "El primer apellido es obligatorio").not().isEmpty(),
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
check("actividadEconomica", "La actividad econimica es oblligatoria").not().isEmpty(),
validateFields,
],

crearClientes);

router.get("/", getClientes);
router.get("/:id",validateJWT, getUnCliente);
router.put("/:id",validateJWT, updateCliente);
router.delete("/:id",validateJWT, deleteCliente);
router.put("/estado/:id",validateJWT,updatEstadoCliente);

export default router;
