const db = require("../models");
const Test = db.test;
const Op = db.Sequelize.Op;

//Create
exports.create = (req, res) => {
    //validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    //create the test
    const test = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    //save to the database
    Test.create(test)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the test"
            });
        });

};

//Retrieve all data
exports.findAll = (req, res) => {
    const title = req.query.title;

    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Test.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving process"
            });
        });
};

//Find sigle data using id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Test.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find test with id = ${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `cannot find test with id = ${id}`
            });
        });
};

//update sigle data using id
exports.update = (req, res) => {
    const id = req.params.id;

    Test.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Test updated successfully"
                });
            } else {
                res.send({
                    message: `Test cannot update with id = ${id}. Maybe because the test doesn't exist or req body was empty`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating test with id =" + id
            });
        });

};

//delete sigle data using id
exports.delete = (req, res) => {
    const id = req.params.id;
    Test.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Test delete successfully"
                });
            } else {
                res.send({
                    message: `Test delete failed with id = ${id}. Maybe because the test does not exist or req body is empty`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error deleting test with id = " + id
            });
        });

};

//delete all sigle data
exports.deleteAll = (req, res) => {
    Test.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} test successfully deleted` });
        })
        .catch(err => {
            res.status.send({
                message:
                    err.message || "some error occurred while deleting"
            });
        });

};

//find all data that has been published
exports.finAllpublished = (req, res) => {
    Test.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Test data"
            });
        });
};