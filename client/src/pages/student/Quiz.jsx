import { useGetAllQuizQuery } from "@/features/api/quizApi.js";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Quiz = () => {
    const { data, isLoading, isError } = useGetAllQuizQuery();
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    if (isLoading) return <h1 className="text-center mt-10 text-lg">Loading Quizzes...</h1>;
    if (isError) return <h1 className="text-center mt-10 text-lg text-red-500">Some error occurred while fetching quizzes</h1>;

    const quizzes = data?.data || [];

    const handleOptionChange = (questionId, optionIndex) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: optionIndex,
        }));
    };

    const handleSubmit = () => {
        let score = 0;
        quizzes.forEach(quiz => {
            quiz.questions.forEach(question => {
                const selected = answers[question._id];
                if (selected === question.correctOptionIndex) {
                    score += 1;
                }
            });
        });
        setScore(score);
        setSubmitted(true);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-[#020817] p-4">
            <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
                Explore Quizzes. Expand Knowledge. 📚
            </h1>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
                Test your understanding with interactive quizzes tailored just for you
            </p>

            <div className="w-full lg:w-2/3 mx-auto space-y-8">
                {quizzes.map(quiz => (
                    <div key={quiz._id} className="w-full bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                        {quiz.questions.map((question, qIdx) => (
                            <div key={question._id} className="mb-6">
                                <p className="font-medium mb-2 text-gray-800 dark:text-gray-200">
                                    ▶ {question.questionText}
                                </p>
                                <div className="space-y-2">
                                    {question.options.map((option, index) => (
                                        <label
                                            key={index}
                                            className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                                        >
                                            <input
                                                type="radio"
                                                name={question._id}
                                                value={index}
                                                checked={answers[question._id] === index}
                                                onChange={() => handleOptionChange(question._id, index)}
                                                className="accent-blue-500"
                                            />
                                            {option}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}

                {!submitted ? (
                    <div className={`text-center ${data.data.length === 0 ? 'hidden' : ''}`}>
                        <Button onClick={handleSubmit} className="mt-4 px-6 py-2">
                            Submit Quiz
                        </Button>
                    </div>
                ) : (
                    <div className="text-center mt-6">
                        <h2 className="text-2xl font-bold text-green-600 dark:text-green-400">
                            You scored {score} out of {quizzes.reduce((acc, q) => acc + q.questions.length, 0)}
                        </h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Quiz;
