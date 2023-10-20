import { NextFunction, Request, Response } from 'express';
import Joi, { AnySchema, ValidationResult } from 'joi';

type JoiSchema<T> = {
  validate(data: T): ValidationResult<T>;
};

type JoiValidateFunc<T> = 
  (schema: JoiSchema<T>) => 
  (req: Request, res: Response, next: NextFunction) => void;

export const joiValidate: JoiValidateFunc<AnySchema> = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  console.log(error);

  return error ? next(error) : next();
};

const customMessage = {
  'string.empty': '"username" and "password" are required',
  'any.required': '"username" and "password" are required',
};

const loginField = joiValidate(Joi.object({
  username: Joi.string().required().messages({
    ...customMessage,
  }),
  password: Joi.string().required().messages({
    ...customMessage,
  }),
}));

const createProduct = joiValidate(Joi.object({
  name: Joi.string().required().min(3),
  price: Joi.string().required().min(3),
  orderId: Joi.number().required(),
}));

const createOrder = joiValidate(Joi.object({
  userId: Joi.number().required(),
  productIds: Joi.array().items(Joi.number().integer().required()),
}));

/*
const customMessage = {
  'string.empty': 'Some required fields are missing',
};

const validateSchema = {
  loginField: joiValidate(Joi.object({
    email: Joi.string().required().messages({
      ...customMessage,
    }),
    password: Joi.string().required().messages({
      ...customMessage,
    }),
  })),

  createUser: joiValidate(Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string().optional(),
  })),

  createCategory: joiValidate(Joi.object({
    name: Joi.string().required(),
  })),

  createPost: joiValidate(Joi.object({
    title: Joi.string().required().messages({
      ...customMessage,
    }),
    content: Joi.string().required().messages({
      ...customMessage,
    }),
    categoryIds: Joi.array().items(Joi.number().integer().required()),
  })),

  updatePost: joiValidate(Joi.object({
    title: Joi.string().required().messages({
      ...customMessage,
    }),
    content: Joi.string().required().messages({
      ...customMessage,
    }),
  })),
};
  isProductName: schemaValidation(Joi.object({
    name: Joi.string().required().empty('').min(5),
  })),

  isSaleValid: schemaValidation(Joi.array().items(
    Joi.object({
      productId: Joi.number().integer().required().empty('')
        .min(1)
        .label('productId'),
      quantity: Joi.number().required().empty('').min(1)
        .label('quantity'),
    }),
  )),
*/

export default {
  createProduct,
  loginField,
  createOrder,
};
