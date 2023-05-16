import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { type Question } from "../types"

export const CurrentCard = ({ info }: { info: Question }) => {
    
    const  { id, question, code, answers } = info
    return (
        <div className="w-full flex flex-col">
            <h5 className="text-xl mb-4">{question}</h5>
            <SyntaxHighlighter language="javascript" style={atomOneDark} showLineNumbers customStyle={{borderRadius: '0.5rem', marginBottom: '1.25rem'}}>
                {code}
            </SyntaxHighlighter>
            <ul className="bg-red-100  rounded-lg">
                {answers.map((answer, index: number) => (
                    <li key={index} className="p-4 hover:bg-[#FFDBDD]">{answer}</li>
                ))}
            </ul>
        </div>
    )
}

