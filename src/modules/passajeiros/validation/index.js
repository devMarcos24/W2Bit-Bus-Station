import Joi from "joi";

export const createPassajeroValitation = async (passajeiro) => {
  const schema = Joi.object({
    name: Joi.string().required("Name is required"),
    age: Joi.number().required("Age is required"),
    cpf: Joi.string().required("CPF is required"),
  });

  const verifySchema = await Joi.validate(passajeiro, schema);

  return verifySchema;
};

export const updatePassajeroValitation = async (passajeiro) => {
  const schema = Joi.object({
    name: Joi.string(),
    age: Joi.number(),
    cpf: Joi.string(),
  });

  const verifySchema = await Joi.validate(passajeiro, schema);

  return verifySchema;
};
