module.exports = app => {
    const tests = require("../controllers/test.controller");

    var router = require("express").Router();

    //create routes for new test
    router.post("/", tests.create);

    //retrieve routes for all tests
    router.get("/", tests.findAll);

    //retrieve all published test routes
    router.get("/published", tests.finAllpublished);

    //retrieve a single test route with id
    router.get("/:id", tests.findOne);

    //update a test with id
    router.put("/:id", tests.update);

    //delete a test with id
    router.delete("/:id", tests.delete);

    //delete all test
    router.delete("/", tests.deleteAll);

    app.use('/api/tests', router);
};