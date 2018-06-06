/**
 * DocumentAPIController
 *
 * @description :: Controller for swagger document tool
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var fs = require('fs');
var path = require('path');

module.exports = {
    swaggerUI: function (req, res) {
        var file = req.param('file');
        var filePath = path.resolve(sails.config.appPath, "swagger", file);
        var stream = fs.createReadStream(filePath);
        stream.on('error', function (err) {
            sails.log.error(err);
            res.notFound();
        });
        stream.pipe(res);
    },
    swaggerAPIDoc: function (req, res) {
        var filePath = path.resolve(sails.config.appPath, "docs", "swagger.json");
        var stream = fs.createReadStream(filePath);
        stream.on('error', function (err) {
            sails.log.error(err);
            res.notFound();
        });
        stream.pipe(res);
    }
};

