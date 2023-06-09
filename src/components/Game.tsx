import { useQuestionsStore } from "../store/questionStore"
import { CurrentCard } from "./CurrentCard"
import { GoNextIcon, GoPrevIcon } from "./Icons"
import { ButtonChange } from "./ButtonChange"
import { Score } from "./Score"

export const Game = () => {
    const questions = useQuestionsStore(state => state.questions)
    const currentQuestion = useQuestionsStore(state => state.currentQuestions)
    const reset = useQuestionsStore(state => state.reset)
    const goNextQuestion = useQuestionsStore(state => state.goNextQuestion)
    const goPrevQuestion = useQuestionsStore(state => state.goPrevQuestion)
    const currentQuestionInfo = questions[currentQuestion]

    return (
        <>
            <div className="flex jusify-center items-center self-center mb-4">
                <ButtonChange disabled={currentQuestion === 0} content={<GoPrevIcon/>} action={goPrevQuestion}/>
                { currentQuestion + 1 } / { questions.length }
                <ButtonChange disabled={currentQuestion >= questions.length} content={<GoNextIcon/>} action={goNextQuestion}/>
            </div>
            <CurrentCard info={currentQuestionInfo}/>
            <Score/>
            <ButtonChange content={'reset'} action={reset}/>
        </>
    )
}