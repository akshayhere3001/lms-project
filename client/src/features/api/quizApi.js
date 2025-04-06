import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const QUIZ_API = import.meta.env.MODE === "development"  ? "http://localhost:8080/api/v1/quiz" : "https://skill-bridge-server-5gx3.onrender.com/api/v1/quiz";

export const quizApi = createApi({
  reducerPath: "quizApi",
  baseQuery: fetchBaseQuery({
    baseUrl: QUIZ_API,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    createQuiz: builder.mutation({
      query: (quizData) => ({
        url: "/create",
        method: "POST",
        body: quizData,
      }),
    }),
    getAllQuiz: builder.query({
      query: () => ({
        url: "/all",
        method: "GET",
      }),
    }),
  }),
});

export const {
    useCreateQuizMutation,
    useGetAllQuizQuery,
} = quizApi;