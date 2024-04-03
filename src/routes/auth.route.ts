import { Router } from "express";
import { login, renewToken, olvidoContrasena, cambioContrasena } from "../controllers/auth.controller";
import {check} from "express-validator";
import {validateFields } from "../middlewares/validate-fields"
import validateJWT, { validateJWTPass } from "../middlewares/validar-jwt";

/**Ruta autenticación */

/**path: /api/v1/auth */
const router = Router();
router.post(
"/",
[    
check("login", "El login obligatorio").not().isEmpty(),
check("password", "El password es obligatorio").not().isEmpty(),
validateFields,
],
login
);

router.get("/",validateJWT, renewToken);

// Ruta olvdo contraseña
// Archivo auth.route.ts

router.post(
  "/olvidocontrasena",
  [
    check("login", "El login es obligatorio").not().isEmpty(),
    check("numeroDocumento", "El password es obligatorio").not().isEmpty(),
    validateFields,
  ],
  olvidoContrasena
);

router.put(
  "/cambiocontrasena",
  validateJWTPass,
  [
    check("password", "El password es obligatorio").not().isEmpty(),
    validateFields,
  ],
  cambioContrasena
);

export default router;
