const jwt = require('jsonwebtoken');

function jwtTokens({ id, firstname, lastname, email }){
    const user = { id, firstname, lastname, email };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn:'30d' });
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn:'30d' });
    
    return ({ accessToken, refreshToken })
}

module.exports = jwtTokens;