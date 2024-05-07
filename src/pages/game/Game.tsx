import {useState, useEffect} from 'react';
import global from '../../styles/global.module.css';
import styles from '../../styles/game.module.css';
import {Link} from "react-router-dom";

const fetchQuestionsFromDatabase = async () => {
  return [
    {id: 1, content: ["5시간 우주공강", "9시부터 5연강"]},
    {id: 2, content: ["월공강", "금공강"]},
    {id: 3, content: ["통학 왕복 4시간", "성향 정반대인 룸메랑 자취"]},
    {id: 4, content: ["학점 잘주는 대신 과제 폭탄인 교수님", "과제 없는 대신 C 뿌리는 교수님"]},
    {id: 5, content: ["10학점씩 듣고 6학년", "23학점씩 듣고 조기졸업"]},
    {id: 6, content: ["(수강신청 시)컴퓨터 전원 꺼짐", "(수강신청 시)와이파이 끊김"]},
    {id: 7, content: ["4년 내내 CC", "4년 내내 아싸"]},
    {id: 8, content: ["하루에 시험 5개", "종강 후 레포트 5개"]},
    {id: 9, content: ["강의 끝나기 직전 질문하는 학생(설명 30분 추가)", "과제 없는지 물어보는 학생(과제 나올 확률 50%)"]},
    {id: 10, content: ["기말 성적 100% 반영", "중간 50% 기말 50% 반영"]},
  ];
};

const Game = () => {
  const [questions, setQuestions] = useState<{ id: number; content: string[]; }[]>([]);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedQuestions = await fetchQuestionsFromDatabase();
        setQuestions(fetchedQuestions);
      } catch (error) {
        console.error("질문 오류 발생", error);
      }
    };

    fetchData().then();
  }, []);


  const handleButtonClick = (buttonIndex: number) => {
    setSelectedButton(buttonIndex);
  };

  const handleNextQuestion = () => {
    console.log(`Question ${currentQuestionIndex + 1}: ${selectedButton === 1 ? 'a' : 'b'}`);

    setAnswers([...answers, selectedButton === 1 ? 1 : 2]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedButton(null);
  };

  const handleSubmit = () => {
    const updatedAnswers = [...answers, selectedButton === 1 ? 1 : 2];

    const resultData = {
      questions: questions.map(({id}, index) => ({
        questionId: id,
        answer: updatedAnswers[index],
      }))
    };

    console.log('Data', resultData);

  };


  return (
    <div className={global.container}>
      <div className={styles.count}>{currentQuestionIndex + 1}/{questions.length}</div>
      <div className={styles.title}>당신의 선택은?</div>
      <div>
        <button
          className={`${styles.buttonChoice} ${selectedButton === 1 ? styles.selectedButton : ''}`}
          onClick={() => handleButtonClick(1)}
        >
          {questions[currentQuestionIndex] ? questions[currentQuestionIndex].content[0] : ""}
        </button>
      </div>
      <div>
        <button
          className={`${styles.buttonChoice} ${selectedButton === 2 ? styles.selectedButton : ''}`}
          onClick={() => handleButtonClick(2)}
        >
          {questions[currentQuestionIndex] ? questions[currentQuestionIndex].content[1] : ""}
        </button>
      </div>
      <div>
        {currentQuestionIndex < questions.length - 1 ? (
          <button className={styles.buttonNext} disabled={selectedButton === null} onClick={handleNextQuestion}>
            다음
          </button>
        ) : (
          <Link to={`/result`} style={{textDecoration: 'none'}}>
            <button className={styles.buttonNext} onClick={handleSubmit} disabled={selectedButton === null}>
              결과 보기
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Game;
