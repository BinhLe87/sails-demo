var GenenicError = require('./GenericError');

function MissingRequiredError(mssg = 'Missing argument', data = {}, code = 400) {

    if (!this) return new MissingRequiredError(...arguments);

    GenenicError.call(this, mssg, data, code);

    this.name = 'MissingRequiredError';
}



module.exports = MissingRequiredError;