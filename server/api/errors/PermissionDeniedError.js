var GenenicError = require('./GenericError');

function PermissionDeniedError(mssg = 'Permission denied', data = {}, code = 403) {

    if (!this) return new PermissionDeniedError(...arguments);

    GenenicError.call(this, mssg, data, code);

    this.name = 'PermissionDeniedError';
}



module.exports = PermissionDeniedError;