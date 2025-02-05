class CustomError extends Error {
    constructor(message, statusCode, data = {}) {
        super(message);
        this.statusCode = statusCode;
        this.data = data
    }
}
class NotFoundError extends CustomError {
    constructor(message = 'Not found Error', data = {}) {
        super(message, 404, data);
    }
}

class BadRequestError extends CustomError {
    constructor(message = 'Bad request error', data = {}) {
        super(message, 400, data);
    }
}

class UnauthorizedError extends CustomError {
    constructor(message = 'Unauthorized error', data = {}) {
        super(message, 401, data);
    }
}

class ForbiddenError extends CustomError {
    constructor(message = 'Access forbidden error', data = {}) {
        super(message, 403, data);
    }
}

class ConflictError extends CustomError {
    constructor(message = 'Conflict error',  data = {}) {
        super(message, 409, data);
    }
}

class InternalServerError extends CustomError {
    constructor(message = 'Internal server error occurred', data = {}) {
        super(message, 500, data);
    }
}



const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err)
    }
    
    const statusCode = err.statusCode || 500;
    const errorData = err.data || null;

    console.error(`[Error] ${err.message}`);

    if (errorData) {
        return res.status(statusCode).json(errorData);
    }

    res.status(statusCode).json({
        message,
        status: statusCode < 500 ? 'Error' : 'Failure',
        status_code: statusCode
    });
};


export {CustomError, NotFoundError, BadRequestError, UnauthorizedError, ForbiddenError, ConflictError, InternalServerError, errorHandler}
