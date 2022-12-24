const SendResponse = require("../../helpers/responseHandler");
const Boom = require('@hapi/boom');
module.exports = {
    list: (req, res, next) => {
        // res.status(200).send(res.__('SUCCESS'));
        return SendResponse(res, {}, 'SUCCESS');
    }
}