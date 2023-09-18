const joiMapStatusHTTP: Record<string, string> = {
  'any.string': 'BAD_REQUEST',
  'any.required': 'BAD_REQUEST',

  'string.empty': 'BAD_REQUEST',
  'string.base': 'INVALID_VALUE',
  'string.min': 'INVALID_VALUE',
  'string.email': 'BAD_REQUEST',

  'number.min': 'INVALID_VALUE',
};

export = joiMapStatusHTTP;
