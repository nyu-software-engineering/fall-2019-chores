const {Strategy, ExtractJwt} = require('passport-jwt');

const secret = process.env.SECRET || 'some other secret as default';

const Person = require('../person');
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
};

module.exports = passport => {
    passport.use(
        new Strategy(opts, (payload, done) => {

            Person.findById(payload.id)
                .then(user => {
                    if(user){
                        return done(null, {
                            id: user.id,
                            username: user.username,
                        });
                    }
                    return done(null, false);
                }).catch(err => console.error(err));

        })
    );
};