module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "salvation",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 300000,
        idle: 100000
    }
};