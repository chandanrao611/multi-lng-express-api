module.exports = (res, data, message = 'SUCCESS') => {
    if (data && data.isBoom && data.isBoom == true) {
        const error = data.output.payload;
        const statusCode = data.output.statusCode;
        if (data.data != null) {
            error.data = data.data;
        }
        const errResponse = {
            statusCode: statusCode,
            Code: 0,
            message: error.message,
            data: {},
        };
        res.status(statusCode).json(errResponse)
    }
    else {
        const response = {
            statusCode: 200,
            status: 200,
            Code: 1,
            message: res.__(message),
            data: data ? data : {},
        };
        res.status(200).json(response);
    }
};