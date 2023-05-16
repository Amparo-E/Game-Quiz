import { create } from "zustand"
import { Question } from "../types"

interface State {
    questions: Question[];
    currentQuestions: number;
    getQuestions: (limit: number) => void
    selectAnswer: (questionId: number, answerINdex: number) => void
}

export const useQuestionsStore = create<State>()((set, get) => {
    return {
        questions: [],
        currentQuestions: 0,

        getQuestions: async (limit) => {
            const response = await fetch('http://localhost:5173/data.json')
            const data = await response.json()

            const questions =  data.sort(() => Math.random() - 0.5).slice(0, limit)
            set({ questions})
        },

        selectAnswer: (questionId, answerIndex) => {
            
        },
    }
})