import './App.css'
import { Game } from './components/Game'
import { PercentGame } from './components/PercentGame'
import { Start } from './components/Start'
import { useQuestionsStore } from './store/questionStore'

function App() {
  const questions = useQuestionsStore(state => state.questions)
  const currentQUestion = useQuestionsStore(state => state.currentQuestions)

  return (
    <main className='min-h-screen flex flex-col justify-center items-center'>
      <h1 className="font-[system-ui] text-5xl pb-6 text-center" >
        JavaScript Quiz
      </h1>
      <div className='w-[30rem] p-6 flex flex-col ' >
        { questions.length !== 0 && <Game/> }
        { questions.length === 0 && <Start/>}
        { currentQUestion === 10 && questions[currentQUestion].userSelectedAnswer != null && <PercentGame/>}
      </div>
    </main>
  )
}

export default App
