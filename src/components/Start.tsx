import { useQuestionsStore } from "../store/questionStore";

export const Start = () => {
  const getQuestions = useQuestionsStore((state) => state.getQuestions);

  const handleClick = () => getQuestions(10);

  return (
    <>
      <button onClick={handleClick} className="border border-black px-4 text-lg">
        Get started
      </button>
    </>
  );
};
