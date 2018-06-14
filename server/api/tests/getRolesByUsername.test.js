var chai = require('chai');
var assert = chai.assert;
var request = require('supertest');
request = request('http://localhost:1337/blockpass_developer/api');

describe('CheckUserHasPermission', function() {

    it('should return Error when User not exists', (done) => {

        var username = 'userXXX';
        
        request
            .get(`/user/${username}/roles`)
            .expect(404)
            .end(done);
    });

    it('should return list of roles when User exists', (done) => {

        var username = 'blockpass';
        
        request
            .get(`/user/${username}/roles`)
            .expect(200)
            .expect(res => {

                assert.isAbove(res.body.data.length, 0, `not found any roles of user ${username}`);                
            })
            .end(done);
    });


});