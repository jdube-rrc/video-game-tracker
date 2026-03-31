import Joi from 'joi';

// Validation schema for creating a hardware log
export const hardwareLogSchema = Joi.object({
  videoGameId: Joi.number()
    .required()
    .messages({
      'any.required': 'Video Game ID is required',
      'number.base': 'Video Game ID must be a number'
    }),
  
  reviewText: Joi.string()
    .required()
    .trim()
    .messages({
      'string.empty': 'Review text cannot be empty',
      'any.required': 'Review text is required',
    }),
  
  os: Joi.string()
    .required()
    .trim()
    .messages({
      'string.empty': 'OS cannot be empty',
      'any.required': 'OS is required',
    }),
  
  hardwareSpecs: Joi.string()
    .required()
    .trim()
    .messages({
      'string.empty': 'Hardware specifications cannot be empty',
      'any.required': 'Hardware specifications are required',
    }),
  
  averageFps: Joi.number()
    .required()
    .min(0)
    .messages({
      'number.base': 'Average FPS must be a number',
      'number.min': 'Average FPS cannot be negative',
      'any.required': 'Average FPS is required',
    }),
});

// Validation schema for updating a hardware log
export const updateHardwareLogSchema = Joi.object({
  videoGameId: Joi.number().messages({
    'number.base': 'Video Game ID must be a number'
  }),
  reviewText: Joi.string().trim(),
  os: Joi.string().trim(),
  hardwareSpecs: Joi.string().trim(),
  averageFps: Joi.number().min(0).messages({
    'number.min': 'Average FPS cannot be negative',
  }),
});
