const userRoute = require("./user.route");
const topicRoute = require("./topic.route");
const questionRoute = require("./question.route");

module.exports = (app) => {
    app.use("/users", userRoute);

    app.use("/topics", topicRoute);

    app.use("/questions", questionRoute);
}