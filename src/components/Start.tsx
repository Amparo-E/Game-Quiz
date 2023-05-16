import { useQuestionsStore } from "../store/questionStore";

export const Start = () => {
  const getQuestions = useQuestionsStore((state) => state.getQuestions);

  const handleClick = () => getQuestions(10);

  return (
    <button onClick={handleClick} className="border border-black">
      Start
    </button>
  );
};
