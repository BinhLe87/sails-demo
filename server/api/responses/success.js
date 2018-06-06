/**
 * Generic Success Response
 *
 * Return success response
 * https://labs.omniti.com/labs/jsend
 *
 * 
 *
 * Usage:
 * ```javascript
 * return res.error({code:errorCode, message:"fail", data:err});
 * ```
 *
 * @param {Object} data - The response object.
 * @param {number} code - Status code default 200.
 */



module.exports = function success(data, code) {

    // Get access to request (`req`), response (`res`), and Sails app (`sails`).
    var req = this.req;
    var res = this.res;
    var sails = req._sails;

    var statusCode = code ? code : 200;
    var body = err;


    res.status(statusCode)

    // Respond using the appropriate custom response
    return res.json(
        {
            status: "success",
            data: data || {}
        }
    )
};