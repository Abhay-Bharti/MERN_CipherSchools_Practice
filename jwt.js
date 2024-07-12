const jwt = require("jsonwebtoken");
const KEY = "CSSecretKey";

const generateToken = ( payload ) => {
    const token = jwt.sign(payload, KEY );
    return token;
}

const verifyToken = ( token ) => {
    try{
        const payload = jwt.verify(token, KEY);
        return { isValidToken: true, payload};
    } catch(err){
        console.error(err);
        return { isValidToken: false, payload };
    }
}

module.exports = { generateToken, verifyToken };