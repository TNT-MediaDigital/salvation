module.exports = app => {
    const tests = require("../controllers/test.controller");

    var router = require("express").Router();

    //create routes for new test
    router.post("/", tests.create);

    //retrieve routes for all tests
    router.get("/", tests.findAll);
}