/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/



  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  'GET /blockpass_developer/api/protected/api_docs': 'DocumentAPIController.swaggerAPIDoc',
  'GET /blockpass_developer/api/protected/document_api/:file': { controller: 'DocumentAPIController', action: 'swaggerUI', skipAssets: false },


  'POST /blockpass_developer/api/user/create': 'UserController.create',
  'PUT   /blockpass_developer/api/user/login': 'UserController.login',
  'POST /blockpass_developer/api/user/logout': 'UserController.logout',
  'GET /blockpass_developer/api/user/:user_name/roles': 'UserController.getRolesByUsername',
  'GET /blockpass_developer/api/users': 'UserController.getUsers',
  'GET /blockpass_developer/api/roles': 'UserController.getRoles',
  'GET /blockpass_developer/api/permissions': 'UserController.getPermissions',
  'POST /blockpass_developer/api/user/:user_name/assign': 'UserController.assignRoleToUser',
  'POST /blockpass_developer/api/role/:role_name/assign-permissions': 'UserController.assignPermissionsToRole',

  'GET /blockpass_developer/api/service': 'ServiceController.list',
  'GET /blockpass_developer/api/service/:service_id': 'ServiceController.detail',
  'POST /blockpass_developer/api/service': 'ServiceController.create',
  'PUT /blockpass_developer/api/service/:service_id': 'ServiceController.update',
  'DELETE /blockpass_developer/api/service/:service_id': 'ServiceController.delete',
  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝


};
