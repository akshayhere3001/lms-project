import { useState } from "react";
import { quizData } from "./quizData";

const Quiz = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("HTML");
    const [userAnswers, setUserAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const handleOptionChange = (questionIndex, optionIndex) => {
        setUserAnswers({ ...userAnswers, [questionIndex]: optionIndex });
    };

    const handleSubmit = () => {
        setShowResults(true);
    };

    const score = quizData[selectedLanguage]?.reduce((acc, q, index) => {
        return acc + (userAnswers[index] === q.answer ? 1 : 0);
    }, 0);

    return (
        <div className="flex min-h-screen bg-gray-100">
            <aside className="w-1/4 bg-white p-4 shadow-lg h-screen sticky top-0">
                <h2 className="text-xl font-bold">Select Language</h2>
                <ul className="mt-6">
                    {Object.keys(quizData).map((lang) => (
                        <li
                            key={lang}
                            className={`p-2 rounded-lg cursor-pointer ${selectedLanguage === lang ? "bg-gray-200 text-black" : ""}`}
                            onClick={() => {
                                setSelectedLanguage(lang);
                                setUserAnswers({});
                                setShowResults(false);
                            }}
                        >
                            {lang}
                        </li>
                    ))}
                </ul>
            </aside>

            <main className="w-3/4 p-6 overflow-y-auto">
                <h2 className="text-2xl font-bold mb-4">{selectedLanguage} Quiz</h2>
                {quizData[selectedLanguage]?.map((q, index) => (
                    <div key={index} className="mb-4 p-4 bg-white shadow-md rounded-md">
                        <p className="font-semibold">{q.question}</p>
                        <div className="mt-2">
                            {q.options.map((opt, optIndex) => (
                                <label key={optIndex} className="block">
                                    <input
                                        type="radio"
                                        name={`question-${index}`}
                                        value={optIndex}
                                        checked={userAnswers[index] === optIndex}
                                        onChange={() => handleOptionChange(index, optIndex)}
                                        className="mr-2"
                                    />
                                    {opt}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}

                <button
                    onClick={handleSubmit}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Submit
                </button>

                {showResults && (
                    <p className="mt-4 text-xl font-bold">Your Score: {score}/{quizData[selectedLanguage]?.length}</p>
                )}
            </main>
        </div>
    );
}

export default Quiz;
