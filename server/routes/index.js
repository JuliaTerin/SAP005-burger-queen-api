const { Router } = require('express')
const Users = require("./users")

const router = Router()

// aqui vai todas as rotas
router.use('/users', users);

module.exports = router

// const { Router } = require('express')
// const ExampleRouter = require("./ExampleRouter")

// const router = Router()

// // aqui vai todas as rotas
// router.use('/example', ExampleRouter);

// module.exports = router
