import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useCreateQuizMutation } from '@/features/api/quizApi.js';
import { toast } from 'sonner';

const AddQuiz = () => {
    const [quizQuestion, setQuizQuestion] = useState("");
    const [options, setOptions] = useState(["", "", "", ""]);
    const [correctOptionIndex, setCorrectOptionIndex] = useState(null);
    const [createQuiz, { data, isLoading, isSuccess, error }] = useCreateQuizMutation();

    const handleOptionChange = (index, value) => {
        const updatedOptions = [...options]
        updatedOptions[index] = value
        setOptions(updatedOptions)
    }

    const handleSubmit = async () => {
        try {
            const quizData = {
                questionText: quizQuestion,
                options,
                correctOptionIndex,
            }

            await createQuiz(quizData);
            toast.success("Quiz created successfully")
            setCorrectOptionIndex(null);
            setOptions(["", "", "", ""]);
            setQuizQuestion("");
        } catch (error) {
            console.error("Error while creating quiz: ", error)
        }
    }

    return (
        <div className="max-w-xl mx-auto p-4 bg-white mt-10">
            <h1 className="font-bold text-2xl mb-2">Add a Quiz Question</h1>
            <p className="text-gray-600 mb-6">Write a question with four options and select the correct one.</p>

            <div className="mb-4">
                <Label>Question</Label>
                <Input
                    type="text"
                    value={quizQuestion}
                    onChange={(e) => setQuizQuestion(e.target.value)}
                    placeholder="Enter your quiz question"
                />
            </div>

            <div className="mb-4 space-y-3">
                <Label>Options</Label>
                {options.map((opt, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="correctOption"
                            checked={correctOptionIndex === index}
                            onChange={() => setCorrectOptionIndex(index)}
                        />
                        <Input
                            type="text"
                            value={opt}
                            onChange={(e) => handleOptionChange(index, e.target.value)}
                            placeholder={`Option ${index + 1}`}
                        />
                    </div>
                ))}
            </div>

            <Button onClick={handleSubmit} disabled={!quizQuestion || options.some(o => o === "") || correctOptionIndex === null}>
                Add Quiz
            </Button>
        </div>
    )
}

export default AddQuiz
