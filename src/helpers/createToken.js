const jwt = require("jsonwebtoken");

function createToken(user) {
    const token = jwt.sign(
        { type: user.token },
        process.env.SECRET,
        { expiresIn: "5h" }
    );

    return token;
}

module.exports = createToken;
