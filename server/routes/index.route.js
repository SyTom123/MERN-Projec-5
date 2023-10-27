const userRoute = require("./user.route");
const topicRoute = require("./topic.route");

module.exports = (app) => {
    app.use("/users", userRoute);

    app.use("/topics", topicRoute);
}