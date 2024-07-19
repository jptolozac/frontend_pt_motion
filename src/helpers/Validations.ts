import * as yup from "yup";
import { IDealer } from "../types/dealer";


const requiredString = yup
  .string()
  .typeError("Debe ser un texto")
  .required("Es requerido");

// const requiredEmail = yup
//   .string()
//   .email("Debe ser un email")
//   .typeError("Debe ser un email")
//   .required("Es requerido")

// const requiredNumber = yup
//   .number()
//   .required("Es requerido")
//   .typeError("Debe ser un número");
// const shortText = yup
//   .string()
//   .typeError("Debe ser un texto")
//   .min(2, "Mínimo 2 caracteres")
//   .max(50, "Máximo 50 caracteres")
//   .required();

// const phonenumber = yup
//   .string()
//   .typeError("Debe ser un texto")
//   .min(10, "Debes ingresar un número de teléfono válido")
//   .max(16, "Debes ingresar un número de teléfono válido")
//   .required();

// const requiredShortText = requiredString
//   .min(2, "Mínimo 2 caracteres")
//   .max(50, "Máximo 50 caracteres");

// const longText = yup
//   .string()
//   .typeError("Debe ser un texto")
//   .min(8, "Mínimo 8 caracteres")
//   .max(500, "Máximo 500 caracteres")

// const requiredLongText = requiredString
//   .min(8, "Mínimo 8 caracteres")
//   .max(500, "Máximo 500 caracteres");

export const createDealerItem = yup.object().shape({
  brand: requiredString,
  branch: requiredString,
  applicant: requiredString,
}) as yup.ObjectSchema<Partial<IDealer>>;