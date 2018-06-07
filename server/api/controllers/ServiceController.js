var rp = require('request-promise');

module.exports = {

    /**
    * List service
    * @route GET /api/service
    * @group service - Operations about service
    * @returns {object} 200 - An array of service
    * @returns {Error}  default - Unexpected error
    */
    list: function (req, res) {
        rp({
            method: 'GET',
            uri: `${sails.config.blockpass.host}/api/rest/service`,
            headers: {
                'User-Agent': 'Blockpass Developer',
                'Authorization': "authorization"
            },
            json: true
        })
            .then((services) => {
                return res.success(services)
            })
            .catch((err) => {
                sails.log.error("[ServiceController - list] Send request to blockpass API error", err);
                return res.error({ code: 500, mssg: "Could not connect to blockpass server", data: err })
            });

    },

    /**
    * Service Detail
    * @route GET /api/service/{service_id}
    * @group service - Operations about service
    * @returns {object} 200 - Service Info
    * @returns {Error}  default - Unexpected error
    */
    detail: function (req, res) {

        let serviceId = req.param('service_id')

        if (!serviceId) {
            return res.err({ code: 400, mssg: "Missing Service Id" })
        }

        rp({
            method: 'GET',
            uri: `${sails.config.blockpass.host}/api/rest/service/${serviceId}`,
            headers: {
                'User-Agent': 'Blockpass Developer',
                'Authorization': "authorization"
            },
            json: true
        })
            .then((service) => {
                return res.success(service)
            })
            .catch((err) => {
                sails.log.error("[ServiceController - detail] Send request to blockpass API error", err);
                return res.error({ code: 500, mssg: "Could not connect to blockpass server", data: err })
            });
    },

    /**
    * Create Service
    * @route POST /api/service
    * @group service - Operations about service
    * @returns {object} 200 - Service Info
    * @returns {Error}  default - Unexpected error
    */
    create: function (req, res) {

        let body = req.body
        if (Object.keys(body).length === 0 && body.constructor === Object) {
            return res.error({ code: 400, mssg: "Missing service data" })
        }

        rp({
            method: 'POST',
            uri: `${sails.config.blockpass.host}/api/rest/service/`,
            headers: {
                'User-Agent': 'Blockpass Developer',
                'Authorization': "authorization"
            },
            body: body,
            json: true
        })
            .then((service) => {
                return res.success(service)
            })
            .catch((err) => {
                sails.log.error("[ServiceController - create] Send request to blockpass API error", err);
                return res.error({ code: 500, mssg: "Could not connect to blockpass server", data: err })
            });
    },

    /**
    * Update Service
    * @route PUT /api/service/{service_id}
    * @group service - Operations about service
    * @returns {object} 200 - Service Info
    * @returns {Error}  default - Unexpected error
    */
    update: function (req, res) {
        let body = req.body
        let serviceId = req.param('service_id')

        if (Object.keys(body).length === 0 && body.constructor === Object) {
            return res.error({ code: 400, mssg: "Missing service data" })
        }

        if (!serviceId) {
            return res.err({ code: 400, mssg: "Missing Service Id" })
        }

        rp({
            method: 'PUT',
            uri: `${sails.config.blockpass.host}/api/rest/service/${serviceId}`,
            headers: {
                'User-Agent': 'Blockpass Developer',
                'Authorization': "authorization"
            },
            body: body,
            json: true
        })
            .then((service) => {
                return res.success(service)
            })
            .catch((err) => {
                sails.log.error("[ServiceController - update] Send request to blockpass API error", err);
                return res.error({ code: 500, mssg: "Could not connect to blockpass server", data: err })
            });
    },

    /**
    * Delete Service
    * @route DELETE /api/service/{service_id}
    * @group service - Operations about service
    * @returns {object} 200 - Service Info
    * @returns {Error}  default - Unexpected error
    */
    delete: function (req, res) {
        let serviceId = req.param('service_id')

        if (!serviceId) {
            return res.err({ code: 400, mssg: "Missing Service Id" })
        }

        rp({
            method: 'DELETE',
            uri: `${sails.config.blockpass.host}/api/rest/service/${serviceId}`,
            headers: {
                'User-Agent': 'Blockpass Developer',
                'Authorization': "authorization"
            },
            json: true
        })
            .then((service) => {
                return res.success(service)
            })
            .catch((err) => {
                sails.log.error("[ServiceController - delete] Send request to blockpass API error", err);
                return res.error({ code: 500, mssg: "Could not connect to blockpass server", data: err })
            });
    }

}