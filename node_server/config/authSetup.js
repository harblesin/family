const User = require("../controllers/userController");
const passport = require("passport");
const secret = require("./key");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const bcrypt = require("bcrypt");
const SALT = 12;

module.exports = (passport) => {
    const LocalStrategy = require("passport-local").Strategy;

    passport.use(
        new LocalStrategy(
            {
                usernameField: "username",
                passwordField: "password"
            },
            async (username, password, done) => {

                console.log(username)
                try {
                    const userInfo = await User.findUser(username);
                    if (!userInfo.length) {
                        return done("User Does Not Exist :)");
                    }

                    const passwordsMatch = await bcrypt.compare(
                        password,
                        userInfo[0].password
                    );

                    let user = {
                        id: userInfo[0].id,
                        username: username,
                        password: password
                    }

                    if (passwordsMatch) {
                        return done(null, user);
                    } else {
                        return done("Incorrect Username or Password");
                    }
                } catch (error) {
                    done(error);
                }
            }
        )
    )

    passport.use(
        new JWTStrategy({
            jwtFromRequest: req => req.cookies.jwt,
            secretOrKey: secret
        },
            (jwtPayload, done) => {

                if (Date.now() > jwtPayload.expires) {
                    return done("jwt expired");
                }
                return done(null, jwtPayload)
            }

        )
    )

}
