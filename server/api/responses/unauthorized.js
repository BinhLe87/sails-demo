module.exports = function unauthorized(data, options) {
    var req = this.req;
    var res = this.res;

    if (req.wantsJSON) {
        return res.sendStatus(401);
    }
    else {

        if (req.session.userId) {
            delete req.session.userId;
        }

        if (req.session.hashed) {
            delete req.session.hashed;
        }

        return res.redirect('/login');
    }
}