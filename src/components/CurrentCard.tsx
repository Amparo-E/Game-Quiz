import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { type Question } from "../types";
import { useQuestionsStore } from "../store/questionStore";
import { InfoIcon } from "./Icons";
import { ButtonChange } from "./ButtonChange";
import { useState } from "react";
import { ModalInfo } from "./ModalInfo";

const getBackground = (info: Question, index: number) => {
  const { userSelectedAnswer, correctAnswer } = info;
  if (userSelectedAnswer == null) return "bg-transparent";
  if (index !== correctAnswer && index !== userSelectedAnswer)
    return "bg-transparent";
  if (index === correctAnswer) return "bg-lime-200";
  if (index === userSelectedAnswer) return "bg-red-400";
  return "transparent";
};

export const CurrentCard = ({ info }: { info: Question }) => {
  const { id, question, code, answers, userSelectedAnswer, explanation } = info;
  const selectAnswer = useQuestionsStore((state) => state.selectAnswer);

  const [openModal, setOpenModal] = useState<Boolean>(false);

  return (
    <div className="w-full flex flex-col border border-black p-4 relative">
      { userSelectedAnswer != null && (
        <ButtonChange content={<InfoIcon />} action={() => setOpenModal(true)} style={"absolute right-4"}/>
      )}
      <ModalInfo
        openModal={openModal}
        setOpenModal={setOpenModal}
        infoExplanation={explanation}
      />
      <h5 className="text-xl pb-6">{question}</h5>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        showLineNumbers
        customStyle={{ borderRadius: "0.5rem", marginBottom: "1.25rem" }}
      >
        {code}
      </SyntaxHighlighter>
      <ul className="bg-red-100 rounded-lg">
        {answers.map((answer, index: number) => (
          <li
            key={index}
            onClick={() => selectAnswer(id, index)}
            className={` p-4 hover:bg-[#FFDBDD]
            ${getBackground(info, index)} ${
              info.userSelectedAnswer != null && "pointer-events-none"
            }`}
          >
            {answer}
          </li>
        ))}
      </ul>
    </div>
  );
};
