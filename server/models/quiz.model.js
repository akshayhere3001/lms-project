import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    questionText: {
        type: String,
        required: true,
    },
    options: {
        type: [String],
        validate: [array => array.length === 4, 'Exactly 4 options required'],
        required: true,
    },
    correctOptionIndex: {
        type: Number,
        min: 0,
        max: 3,
        required: true,
    },
});

const quizSchema = new mongoose.Schema({
    questions: [questionSchema],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, { timestamps: true });

export const Quiz = mongoose.model("Quiz", quizSchema);
