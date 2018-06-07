var rp = require('request-promise');

var fake_data = {
    "count": 6,
    "next": null,
    "previous": null,
    "result": [
        {
            "_id": "5ab378872128392d6e8350ca",
            "updatedAt": "2018-05-23T08:31:52.360Z",
            "createdAt": "2018-03-22T04:51:01.276Z",
            "levelRequirement": "1",
            "__v": 0,
            "status": "active",
            "userServiceRegister": null,
            "appid": {
                "android": "",
                "ios": ""
            },
            "order": 1,
            "deeplink": {
                "android": "",
                "ios": ""
            },
            "rating": "",
            "isRegistered": false,
            "registerEndpoint": {
                "callbackUrls": [],
                "status": "http://172.16.0.203:3011/blockpass/api/status",
                "upload": "http://172.16.0.203:3011/blockpass/api/uploadData",
                "login": "http://172.16.0.203:3011/blockpass/api/login",
                "register": "http://172.16.0.203:3011/blockpass/api/register",
                "website": "http://172.16.0.203:3011"
            },
            "extras": [],
            "images": {
                "banner": "",
                "backdrop": "",
                "thumbnail": "http://file.vforum.vn/hinh/2016/01/demo-la-gi.jpg",
                "logo": "http://file.vforum.vn/hinh/2016/01/demo-la-gi.jpg"
            },
            "contacts": {
                "language": [],
                "address": "",
                "country": "",
                "googlePlus": "",
                "twitter": "",
                "facebook": "",
                "email": "",
                "website": ""
            },
            "publicKeyHash": "/0c5617cc0bdd675fcb4a221beafbdfa3796c7e743015e0970d9c29937bea62d9",
            "publicKey": "1MZmUAZjr8pzMsxMFvNKihTdohxeCBVcPZ",
            "certRequirement": [],
            "certificate": [
                "demo-service-cert"
            ],
            "requirementDetail": [],
            "requirement": [
                "email",
                "given_name",
                "family_name",
                "address",
                "dob",
                "phone",
                "passport",
                "selfie",
                "proof_of_address"
            ],
            "slug": "blockpass-2889-1527064241068",
            "tags": [],
            "clientSecret": "3rd_service_demo",
            "clientId": "3rd_service_demo",
            "longDescription": "sample testing of 3d service demo. Please access this URL below for registering",
            "shortDescription": "3rd service demo",
            "isin": "",
            "name": "3rd Service Demo"
        },
        {
            "_id": "5b051895a4c0777c83a4c596",
            "updatedAt": "2018-05-24T09:04:16.843Z",
            "createdAt": "2018-05-23T07:30:29.091Z",
            "__v": 0,
            "status": "active",
            "userServiceRegister": null,
            "appid": {
                "android": "",
                "ios": ""
            },
            "order": 1,
            "deeplink": {
                "android": "",
                "ios": ""
            },
            "rating": "",
            "isRegistered": false,
            "registerEndpoint": {
                "callbackUrls": [],
                "status": "http://172.16.0.203:3012/blockpass/api/status",
                "upload": "http://172.16.0.203:3012/blockpass/api/uploadData",
                "login": "http://172.16.0.203:3012/blockpass/api/login",
                "register": "http://172.16.0.203:3012/blockpass/api/register",
                "website": "https://complyadvantage.com"
            },
            "extras": [],
            "images": {
                "banner": "",
                "backdrop": "",
                "thumbnail": "https://www.encompasscorporation.com/wp-content/uploads/2017/06/Complay-Advantage_Encompass-Info-Provider_grid.png",
                "logo": "https://www.encompasscorporation.com/wp-content/uploads/2017/06/Complay-Advantage_Encompass-Info-Provider_grid.png"
            },
            "contacts": {
                "language": [],
                "address": "",
                "country": "",
                "googlePlus": "",
                "twitter": "",
                "facebook": "",
                "email": "",
                "website": ""
            },
            "publicKeyHash": "/b56e1fe443e99245d72f0b7d359f203bbf67535b93edb2840345d56c6c2c522d",
            "publicKey": "1MbjDDPiVWPja6UsUnycDUyQMWfFeh1WHn",
            "certRequirement": [],
            "certificate": [],
            "requirementDetail": [],
            "requirement": [
                "given_name",
                "family_name",
                "dob"
            ],
            "slug": "blockpass-3783-1527152563548",
            "tags": [
                "verifier",
                "ca",
                "partner"
            ],
            "clientSecret": "complyadvantage_service",
            "clientId": "complyadvantage_service",
            "longDescription": "Comply Advantage long desc",
            "shortDescription": "Comply Advantage desc",
            "isin": "",
            "name": "Comply Advantage"
        },
        {
            "_id": "5b15f82808bb8c2e2b7959b6",
            "updatedAt": "2018-06-05T02:40:58.247Z",
            "createdAt": "2018-06-05T02:40:40.611Z",
            "__v": 0,
            "status": "active",
            "userServiceRegister": null,
            "appid": {
                "android": "",
                "ios": ""
            },
            "order": 1,
            "deeplink": {
                "android": "",
                "ios": ""
            },
            "rating": "",
            "isRegistered": false,
            "registerEndpoint": {
                "callbackUrls": [],
                "status": "http://localhost:3000/blockpass/api/status",
                "upload": "http://localhost:3000/blockpass/api/uploadData",
                "login": "http://localhost:3000/blockpass/api/login",
                "register": "http://localhost:3000/blockpass/api/register",
                "website": "https://blockpass.org"
            },
            "extras": [],
            "images": {
                "banner": "",
                "backdrop": "",
                "thumbnail": "https://www.blockpass.org/assets/logo.png",
                "logo": "https://www.blockpass.org/assets/logo.png"
            },
            "contacts": {
                "language": [],
                "address": "",
                "country": "",
                "googlePlus": "",
                "twitter": "",
                "facebook": "",
                "email": "",
                "website": ""
            },
            "publicKeyHash": "/1fdad8803ce7d682b039ec6b1d3de5f0ecda2b4070a6598343b3b8ea7a959e3d",
            "publicKey": "1LqL5SCjtmmybGhkodyV34SeZdRrQhvyEK",
            "certRequirement": [],
            "certificate": [
                "foundation-service-cert"
            ],
            "requirementDetail": [],
            "requirement": [
                "email",
                "given_name",
                "family_name",
                "address",
                "dob",
                "phone",
                "passport",
                "selfie",
                "proof_of_address"
            ],
            "slug": "blockpass-6023-1528166480030",
            "tags": [
                "verifier",
                "obiwan",
                "master-yoda"
            ],
            "clientSecret": "blockpass_foundation",
            "clientId": "blockpass_foundation",
            "longDescription": "",
            "shortDescription": "Blockpass Foundation",
            "isin": "",
            "name": "Foundation"
        },
        {
            "_id": "5afd3dd1ab898c0601684739",
            "updatedAt": "2018-05-25T07:53:58.857Z",
            "createdAt": "2018-05-17T04:51:01.276Z",
            "levelRequirement": "1",
            "__v": 0,
            "status": "active",
            "userServiceRegister": null,
            "appid": {
                "android": "",
                "ios": ""
            },
            "order": 1,
            "deeplink": {
                "android": "",
                "ios": ""
            },
            "rating": "",
            "isRegistered": false,
            "registerEndpoint": {
                "callbackUrls": [],
                "status": "http://172.16.0.203:3010/blockpass/api/status",
                "upload": "http://172.16.0.203:3010/blockpass/api/uploadData",
                "login": "http://172.16.0.203:3010/blockpass/api/login",
                "register": "http://172.16.0.203:3010/blockpass/api/register",
                "website": "http://172.16.0.203:3010"
            },
            "extras": [],
            "images": {
                "banner": "",
                "backdrop": "",
                "thumbnail": "https://asia-api.blockpass.org/api/private/image/onfido_cert_thumbnail.png",
                "logo": "https://asia-api.blockpass.org/api/private/image/onfido_cert_thumbnail.png"
            },
            "contacts": {
                "language": [],
                "address": "",
                "country": "",
                "googlePlus": "",
                "twitter": "",
                "facebook": "",
                "email": "",
                "website": ""
            },
            "publicKeyHash": "/79158042c00158944ed5369454a4cd839e07687c12ab08dc5015d0cb8a82d281",
            "publicKey": "13HuRssS4ftqqsdw6ckT4TG9BeJ6TLMN4W",
            "certRequirement": [],
            "certificate": [
                "onfido-service-cert"
            ],
            "requirementDetail": [],
            "requirement": [
                "email",
                "given_name",
                "family_name",
                "address",
                "dob",
                "phone",
                "passport"
            ],
            "slug": "blockpass-19-1527234718737",
            "tags": [
                "verifier"
            ],
            "clientSecret": "onfido_service",
            "clientId": "onfido_service",
            "longDescription": "",
            "shortDescription": "Onfido Kyc",
            "isin": "",
            "name": "Onfido Kyc"
        },
        {
            "_id": "5b04087c01f1683d665191d7",
            "updatedAt": "2018-05-25T07:54:36.232Z",
            "createdAt": "2018-05-22T12:09:32.243Z",
            "uploadEndpoint": {
                "callbackUrls": [],
                "endpoint": "",
                "website": ""
            },
            "__v": 0,
            "status": "inactive",
            "userServiceRegister": null,
            "appid": {
                "android": "",
                "ios": ""
            },
            "order": 2,
            "deeplink": {
                "android": "",
                "ios": ""
            },
            "rating": "",
            "isRegistered": false,
            "registerEndpoint": {
                "callbackUrls": [],
                "status": "3333",
                "upload": "4444",
                "login": "22",
                "register": "1111",
                "website": "http://172.16.0.123:8088/"
            },
            "extras": [],
            "images": {
                "banner": "",
                "backdrop": "",
                "thumbnail": "img/img_placeholder.jpg",
                "logo": "img/img_placeholder.jpg"
            },
            "contacts": {
                "language": [],
                "address": "",
                "country": "",
                "googlePlus": "",
                "twitter": "",
                "facebook": "",
                "email": "",
                "website": ""
            },
            "publicKeyHash": "",
            "publicKey": "abc",
            "certRequirement": [],
            "certificate": [],
            "requirementDetail": [],
            "requirement": [
                "email",
                "given_name",
                "family_name",
                "address",
                "dob",
                "phone",
                "passport",
                "selfie",
                "proof_of_address"
            ],
            "slug": "blockpass-3644-1527234868164",
            "tags": [],
            "clientSecret": "abc",
            "clientId": "abc",
            "longDescription": "This is a test service \nThis is a test service \nThis is a test service \nThis is a test service \nThis is a test service ",
            "shortDescription": "This is a test service",
            "isin": "",
            "name": "Toan Service"
        },
        {
            "_id": "5aeab0542128392d6e8350d1",
            "updatedAt": "2018-06-04T03:35:09.733Z",
            "createdAt": "2018-03-22T04:51:01.276Z",
            "levelRequirement": "1",
            "__v": 0,
            "status": "active",
            "userServiceRegister": null,
            "appid": {
                "android": "",
                "ios": ""
            },
            "order": 1,
            "deeplink": {
                "android": "",
                "ios": ""
            },
            "rating": "",
            "isRegistered": false,
            "registerEndpoint": {
                "callbackUrls": [],
                "status": "http://localhost:3000/blockpass/api/status",
                "upload": "http://localhost:3000/blockpass/api/uploadData",
                "login": "http://localhost:3000/blockpass/api/login",
                "register": "http://localhost:3000/blockpass/api/register",
                "website": "http://localhost:3000/blockpass"
            },
            "extras": [],
            "images": {
                "banner": "",
                "backdrop": "",
                "thumbnail": "http://www.userlogos.org/files/logos/Brentc/localhost_logo_black.png",
                "logo": "http://www.userlogos.org/files/logos/Brentc/localhost_logo_black.png"
            },
            "contacts": {
                "language": [],
                "address": "",
                "country": "",
                "googlePlus": "",
                "twitter": "",
                "facebook": "",
                "email": "",
                "website": ""
            },
            "publicKeyHash": "",
            "publicKey": "",
            "certRequirement": [
                "demo-service-cert"
            ],
            "certificate": [
                "demo-service-cert"
            ],
            "requirementDetail": [],
            "requirement": [
                "email",
                "given_name",
                "family_name",
                "address",
                "dob",
                "phone",
                "passport",
                "selfie",
                "proof_of_address"
            ],
            "slug": "blockpass-5877-1528083308102",
            "tags": [],
            "clientSecret": "developer_service",
            "clientId": "developer_service",
            "longDescription": "",
            "shortDescription": "3rd service demo",
            "isin": "",
            "name": "developer_service"
        }
    ]
}


module.exports = {

    /**
    * List service
    * @route GET /api/service
    * @group service - Operations about service
    * @returns {object} 200 - An array of service
    * @returns {Error}  default - Unexpected error
    */
    list: function (req, res) {
        if (sails.config.deployEnv == "DEV") {
            return res.success(fake_data)
        }

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

        if (sails.config.deployEnv == "DEV") {
            let result = {}
            fake_data.result.map((val, i) => {
                if (val._id === serviceId) Object.assign(result, val)
            })
            return res.success(result)
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

        if (sails.config.deployEnv == "DEV") {
            body._id = Math.random() * 100
            fake_data.result.push(body)
            return res.success(body)
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


        if (sails.config.deployEnv == "DEV") {
            body._id = serviceId
            fake_data.result.map((val, i) => {
                if (val._id === serviceId) Object.assign(val, body)
            })
            return res.success(body)
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

        if (sails.config.deployEnv == "DEV") {
            body._id = serviceId
            fake_data.result.map((val, i) => {
                delete val
            })
            return res.success(body)
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