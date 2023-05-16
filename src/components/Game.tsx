import { useQuestionsStore } from "../store/questionStore"
import { CurrentCard } from "./CurrentCard"

export const Game = () => {
    const questions = useQuestionsStore(state => state.questions)
    const currentQuestion = useQuestionsStore(state => state.currentQuestions)
    const currentQuestionInfo = questions[currentQuestion]

    return (
        <CurrentCard info={currentQuestionInfo}/>
    )
}