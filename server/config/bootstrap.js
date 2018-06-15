/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function (done) {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return done();
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```

  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)

  // Enable this for auto genrate swagger doc
  // SwaggerGenerate.generate()

  //HACK:
//   var createdRole_1 = await Role.findOrCreate({
//     name: 'operator'
//   }, {
//       name: 'operator',
//       description: 'mo ta role operator'
//     });

//   var createdRole_2 = await Role.findOrCreate({
//     name: 'admin'
//   }, {
//       name: 'admin',
//       description: 'mo ta role admin'
//     });

//   // console.log(createdRole);

//   var createdUser = await User.findOrCreate({

//     userName: 'blockpass'
//   }, {
//       userName: 'blockpass',
//       password: '123'
//     });


// await User.addToCollection(createdUser.id, 'roles').members([createdRole_1.id, createdRole_2.id]);

//--------
//HACK: Tao role - permission
// var createdRole_1 = await Role.findOrCreate({
//   name: 'operator'
// }, {
//     name: 'operator',
//     description: 'mo ta role operator'
//   });


// var createdPermission_1 = await Permission.findOrCreate({

//   id: '1'
// }, {
//     name: 'Create new user POST',
//     api: '/api/user'
//   });


//   var createdPermission_2 = await Permission.findOrCreate({

//     id: '2'
//   }, {
//       name: 'Updaet existing user PUT',
//       api: '/api/user'
//     });




// await Role.addToCollection(createdRole_1.id, 'permissions').members([createdPermission_1.id, createdPermission_2.id]);



  return done();




};
