import Joi from "joi";

export const createUserValidation = async (user) => {
  const schema = Joi.object({
    name: Joi.string().required("Name is required"),
    email: Joi.string().required("Email is required"),
    url_foto: Joi.string(),
    state: Joi.string().required("State is required"),
    city: Joi.string().required("City is required"),
    password: Joi.string().required("Password is required"),
    confirmPassword: Joi.string().required("Confirm is required"),
  });

  const verifySchema = await Joi.validate(user, schema);

  return verifySchema;
};

export const sessionValidation = async (session) => {
  const schema = Joi.object({
    email: Joi.string().required("Email is required"),
    password: Joi.string().required("Password is required"),
  });

  const verifySchema = await Joi.validate(session, schema);

  return verifySchema;
};
