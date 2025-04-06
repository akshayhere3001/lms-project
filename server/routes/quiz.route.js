import express from "express";
import { createQuiz, getAllQuizzes } from "../controllers/quiz.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
const router = express.Router();

router.route('/create').post(isAuthenticated, createQuiz);
router.route('/all').get(isAuthenticated, getAllQuizzes);

export default router;