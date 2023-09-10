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


};

//update sigle data using id
exports.update = (req, res) => {


};

//delete sigle data using id
exports.delete = (req, res) => {


};

//delete all sigle data
exports.deleteAll = (req, res) => {


};

//find all data that has been published
exports.finAllpublished = (req, res) => {


};