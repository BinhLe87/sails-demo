var GenenicError = require('./GenericError');

function BadRequestError(mssg = 'One of the request inputs is not valid.', data = {}, code = 400) {

    if (!this) return new BadRequestError(...arguments);

    GenenicError.call(this, mssg, data, code);

    this.name = 'BadRequestError';
}



module.exports = BadRequestError;