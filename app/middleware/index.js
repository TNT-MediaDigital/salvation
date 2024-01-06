const authJwt = require("./auth.middleware");
const verifySignUp = require('./verify.SignUp');

module.exports = {
    authJwt,
    verifySignUp
};