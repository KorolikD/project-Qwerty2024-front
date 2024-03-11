import Joi from 'joi';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const signUpValidation = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().trim().regex(emailRegex).required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});

export const signInValidation = Joi.object({
  email: Joi.string().trim().regex(emailRegex).required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});
