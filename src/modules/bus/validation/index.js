import Joi from "joi";

export const createBusValidation = async (bus) => {
  const schema = Joi.object({
    placa: Joi.string().required("Placa is required"),
    ano: Joi.number().required("Ano is required"),
    modelo: Joi.string().required("Modelo is required"),
    acentos: Joi.number().required("Acentos is required"),
  });

  const verifySchema = await Joi.validate(bus, schema);

  return verifySchema;
};
