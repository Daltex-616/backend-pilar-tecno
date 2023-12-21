export const httpError={
    "InternalServerError": {
      "status": 500,
      "code": "INTERNAL_SERVER_ERROR",
      "message": "Internal Server Error"
    },
    "NotFoundError": {
      "status": 404,
      "code": "NOT_FOUND_ERROR",
      "message": "Resource Not Found"
    },
    "BadRequestError": {
      "status": 400,
      "code": "BAD_REQUEST_ERROR",
      "message": "Bad Request"
    },
    "UnauthorizedError": {
      "status": 401,
      "code": "UNAUTHORIZED_ERROR",
      "message": "Unauthorized Access"
    },
    "ForbiddenError": {
      "status": 403,
      "code": "FORBIDDEN_ERROR",
      "message": "Access Forbidden"
    },
    "ValidationError": {
      "status": 422,
      "code": "VALIDATION_ERROR",
      "message": "Validation Failed"
    },
    "ConflictError": {
      "status": 409,
      "code": "CONFLICT_ERROR",
      "message": "Conflict Detected"
    },
    "UnsupportedMediaTypeError": {
      "status": 415,
      "code": "UNSUPPORTED_MEDIA_TYPE_ERROR",
      "message": "Unsupported Media Type"
    },
    "ServiceUnavailableError": {
      "status": 503,
      "code": "SERVICE_UNAVAILABLE_ERROR",
      "message": "Service Unavailable"
    }
  }