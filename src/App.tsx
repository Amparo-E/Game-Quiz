import './App.css'
import { CurrentCard } from './components/CurrentCard'
import { Game } from './components/Game'
import { Start } from './components/Start'
import { useQuestionsStore } from './store/questionStore'

function App() {
  const questions = useQuestionsStore(state => state.questions)

  return (
    <main className='min-h-screen flex justify-center items-center'>
      <div className='w-[32.25rem] bg-red-200 p-6 ' >
        <h1 className="font-[system-ui] text-5xl pb-6 text-center" >
          JavaScript Quiz
        </h1>
        { questions.length === 0 && <Start/>}
        { questions.length !== 0 && <Game/> }
      </div>
    </main>
  )
}

export default App
