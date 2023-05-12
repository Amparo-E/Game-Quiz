import './App.css'
import { useQuestionsStore } from './store/questionStore'

function App() {
  const questions = useQuestionsStore(state => state.questions)
  const getQuestions = useQuestionsStore(state => state.getQuestions)

  console.log(questions)
  return (
    <main className='min-h-screen '>
      <div className='bg-red-100'>
        <h1 className="font-[system-ui] text-3xl ">
          Hello world!
        </h1>

        <button onClick={() => getQuestions(5)}>Click</button>
      </div>
    </main>
  )
}

export default App
