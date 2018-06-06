/**
 * Generic Error Handler / Classifier
 *
 * Return error response based on JSend format
 * https://labs.omniti.com/labs/jsend
 *
 * Defaults to `res.serverError`
 *
 * Usage:
 * ```javascript
 * if (err) return res.error({code:errorCode, message:"fail", data:err});
 * ```
 *
 * @param {Object} err - The error object.
 * @param {number} err.code - Error Code.
 * @param {string} err.mssg - Error message.
 * @param {Object} err.data - Error detail object.
 *  
 */



module.exports = function error(err) {

    // Get access to request (`req`), response (`res`), and Sails app (`sails`).
    var req = this.req;
    var res = this.res;
    var sails = req._sails;

    var statusCode = err.code
    var statusCode = 500;
    var body = err;
    if (sails.config.deployEnv === sails.config.constants.deployEnv.prod && sails.config.keepResponseErrors !== true) {
        err.data = {}
    }

    res.status(err.code)

    // Respond using the appropriate custom response
    return res.json(
        {
            status: "error",
            code: err.code,
            message: err.mssg,
            data: err.data || {}
        }
    )
};