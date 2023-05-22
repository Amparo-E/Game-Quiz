import { useQuestionsStore } from "../store/questionStore"

export const Score = () => {
    const questions = useQuestionsStore(state => state.questions)

    let wrong = 0
    let correct = 0
    let unanswered = 0

    questions.forEach(question => {
        const { correctAnswer, userSelectedAnswer } = question

        if(userSelectedAnswer == null) unanswered++
        else if(userSelectedAnswer === correctAnswer) correct++
        else wrong++
    })




    return (
        <footer className="mt-6 self-center">
            <p>
                {`✅ ${correct} corrects - ❌ ${wrong} wrong - ❓${unanswered} unanswered`}
            </p>
        </footer>
    )
}