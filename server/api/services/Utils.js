var crypto = require('crypto');

module.exports = {
    sha256: function (str) {
        return crypto.createHash('sha256').update(str).digest('hex')
    }
}