const express = require('express');
const recipesRouter = require('./routes/recipeRoutes');
const userRouter = require('./routes/userRoutes');
const router = express.Router();

router.use('/recipes', recipesRouter);
router.use('/users', userRouter);

module.exports = router;