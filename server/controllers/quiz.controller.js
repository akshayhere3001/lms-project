import { Quiz } from "../models/quiz.model.js";

// create an quiz
export const createQuiz = async (req, res) => {
    try {
        const { questionText, correctOptionIndex, options } = req.body;

        // validation
        if (!questionText || !Array.isArray(options) || options.length !== 4 || correctOptionIndex === undefined) {
            return res.status(400).json({ success: false, message: "Please provide questionText, exactly 4 options, and correctOptionIndex." });
        }

        if (correctOptionIndex < 0 || correctOptionIndex > 3) {
            return res.status(400).json({ success: false, message: "Correct option index must be between 0 and 3." });
        }

        const userId = req.id;
        if (!userId) {
            return res.status(401).json({ success: false, message: "Unauthorized. User not found." });
        }

        const newQuiz = await Quiz.create({
            questions: [{
                questionText,
                options,
                correctOptionIndex
            }],
            createdBy: userId,
        });

        return res.status(201).json({
            success: true,
            message: "Quiz created successfully!",
            data: newQuiz
        });
    } catch (error) {
        console.error("Error creating quiz:", error.message);
        return res.status(500).json({
            success: false,
            message: "Server error while creating quiz",
            error: error.message
        });
    }
};


// get all quiz
export const getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find()
            .populate("createdBy", "name email") // Optional: Include creator info
            .sort({ createdAt: -1 }); // Newest first

        return res.status(200).json({
            success: true,
            count: quizzes.length,
            data: quizzes
        });
    } catch (error) {
        console.error("Error fetching quizzes:", error.message);
        return res.status(500).json({
            success: false,
            message: "Server error while fetching quizzes",
            error: error.message
        });
    }
};