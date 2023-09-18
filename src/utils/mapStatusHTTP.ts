type HttpStatus = {
  [key: string]: number;
};

const httpResponseMap: HttpStatus = {
  SUCCESSFUL: 200,
  CREATED: 201,
  DELETED: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INVALID_VALUE: 422,
};

const mapStatusHTTP = (status: keyof HttpStatus): number =>
  httpResponseMap[status] || 500;

export = mapStatusHTTP;
