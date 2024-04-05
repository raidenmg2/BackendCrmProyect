import { Router } from "express";
import {check} from "express-validator";
import {validateFields } from "../middlewares/validate-fields"
import validateJWT from "../middlewares/validar-jwt";
import { crearOportunidad, getOportunidades, getUnaOportunidad, updateOportunidad } from "../controllers/oportunidad.controller";

const router = Router();
router.post(
"/",
validateJWT,
[    
check("oportunidad", "El nombre de la oportunidad es obligatorio").not().isEmpty(),
check("cliente", "El cliente es obligatorio en la oportunidad").not().isEmpty(),
check("producto", "El producto es obligatorio").not().isEmpty(),
validateFields,
],
crearOportunidad
);

router.get("/", validateJWT, getOportunidades);
router.get("/:id", validateJWT, getUnaOportunidad);

router.put("/:id",validateJWT,updateOportunidad);
export default router;