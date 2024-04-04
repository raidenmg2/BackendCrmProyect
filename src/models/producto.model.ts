import { Model, Schema, Types, model} from "mongoose";

interface CaracteristicasTecnicas {
  procesador: string;
  memoriaRam: string;
  almacenamiento: string;
  conectividad: string;
  resolucionImagen: string;
}

interface CaracteristicasFisicas {
  tipoControles: string;
  color: string;
  puertosConectividad: string;
  dimensiones: string;
  peso: string;
}

interface Distribuidor {
  nit: string;
  razonSocial: number;
  telefono: number;
  direccion: string;
}




interface ProductoInterface  {
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  caracteristicasTecnicas: CaracteristicasTecnicas;
  caracteristicasFiscas: CaracteristicasFisicas;
  distribuidor: Distribuidor;
  usuario: Types.ObjectId;
  estado: boolean;
  createdAt: Date;
}

/**aqui se le indica que información vamos a traer de la base de datos  */
const ProductoSchema = new Schema<ProductoInterface>({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  precio: { type: Number, required: true },
  categoria: { type: String, required: true },
  caracteristicasTecnicas: { type: Object, required: true },
  caracteristicasFiscas: { type: Object, required: true },
  distribuidor: { type: Object, required: true },
  usuario: { type: Schema.Types.ObjectId, ref: "usuario", required: true },
  estado: { type: Boolean, required: true, default: true },
  createdAt: { type: Date, default: Date.now() },
});

const ProductoModel: Model<ProductoInterface> = model<ProductoInterface>(
  "producto",
  ProductoSchema
);
export default ProductoModel;
