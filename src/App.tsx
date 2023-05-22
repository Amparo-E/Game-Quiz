import './App.css'
import { Game } from './components/Game'
import { Start } from './components/Start'
import { useQuestionsStore } from './store/questionStore'

function App() {
  const questions = useQuestionsStore(state => state.questions)

  return (
    <main className='min-h-screen flex flex-col justify-center items-center'>
      <h1 className="font-[system-ui] text-5xl pb-6 text-center" >
        JavaScript Quiz
      </h1>
      <div className='w-[32.25rem] p-6 flex flex-col ' >
        { questions.length !== 0 && <Game/> }
        { questions.length === 0 && <Start/>}
      </div>
    </main>
  )
}

export default App
