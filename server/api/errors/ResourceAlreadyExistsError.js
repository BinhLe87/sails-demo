var GenenicError = require('./GenericError');

function ResourceAlreadyExistsError(mssg = 'The specified resource already exists.', data = {}, code = 409) {

    if (!this) return new ResourceAlreadyExistsError(...arguments);

    GenenicError.call(this, mssg, data, code);

    this.name = 'ResourceAlreadyExistsError';
}



module.exports = ResourceAlreadyExistsError;