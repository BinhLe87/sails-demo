var GenenicError = require('./GenericError');

function ResourceNotFoundError(mssg = 'The specified resource does not exist.', data = {}, code = 404) {

    if (!this) return new ResourceNotFoundError(...arguments);

    GenenicError.call(this, mssg, data, code);

    this.name = 'ResourceNotFoundError';
}



module.exports = ResourceNotFoundError;