const { Router } = require("express")
const usersController = require("../controller/usersController.js")

const usersRouter = Router()

usersRouter.get("/", usersController.getUsers);
usersRouter.get("/:id", usersController.getIdUsers);
usersRouter.post("/", usersController.postUsers);
usersRouter.put("/:id", usersController.putUsers);
usersRouter.delete("/:id", usersController.deleteUsers);

module.exports = usersRouter