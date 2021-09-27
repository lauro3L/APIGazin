const routes = require("express").Router();
const authMiddleware = require("./app/middleware/auth");
const DevelopersController = require("./app/controllers/DevelopersController");
const SessionController = require("./app/controllers/SessionController");
const UserController = require("./app/controllers/UserController");


routes.post("/sessions", SessionController.store);
routes.post("/login", UserController.create);

routes.use(authMiddleware);

routes.get("/developers/", DevelopersController.get);
routes.get("/developers/:id", DevelopersController.getById);
routes.post("/developers", DevelopersController.create);
routes.delete("/developers/:id", DevelopersController.delete);
routes.put("/developers/:id", DevelopersController.put);

routes.get("/dashboard",  (req,res) => {
  return res.status(200).send();

});


module.exports = routes;