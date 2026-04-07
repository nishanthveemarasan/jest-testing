export const HTTP_CODES = {
    OK : 200,
    CREATED : 201,
    BAD_REQUEST : 400,
    UNAUTHORIZED : 401,
    NOT_fOUND : 404,
    INTERNAL_SERVER_ERROR : 500
} as const;

export const HTTP_METHODS = {
    GET : 'GET',
    POST : 'POST',
    PUT : 'PUT',
    DELETE : 'DELETE',
    OPTIONS : 'OPTIONS'
} as const;