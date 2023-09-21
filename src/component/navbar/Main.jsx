  import React,{useState ,useEffect } from 'react'
  import Form from '../../form/Form';
  import Question from '../../question/Question';
  import Result from '../../result/Result';
  import questions from '../../question/question.json';

 const Main = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [timeLeft,setTimeLeft]=useState(15);
    useEffect(() => {
      let timer;
  
      if (timeLeft > 0 && currentQuestion < questions.length && !showResult) {
        timer = setTimeout(() => {
          setTimeLeft(timeLeft - 1);
        }, 1000);
      } else if (timeLeft === 0 && currentQuestion < questions.length && !showResult) {
        handleSelectOption(null); 
      }
  
      return () => clearTimeout(timer); 
    }, [timeLeft, currentQuestion, showResult]);
   
  
    const handleStartQuiz = (userName, userEmail) => {
      setName(userName);
      setEmail(userEmail);
      setCurrentQuestion(0);
      setScore(0);
      setShowResult(false);
    };
  
    const handleSelectOption = selectedOption => {
      setSelectedOption(selectedOption);
  
      const currentQuestionData=questions[currentQuestion];
      if (selectedOption === currentQuestionData.correctAnswer) {
        setScore(prevScore => prevScore + 1);
       
      }
  
      if (currentQuestion === questions.length - 1) {
        setShowResult(true);
      } else {
        setSelectedOption(null);
        setCurrentQuestion(prevQuestion => prevQuestion + 1);
        setTimeLeft(15);
      }
    }


    return (
      <>
        <div className="flex flex-col sm:flex-row justify-between border border-gray-200 shadow-lg p-4 space-y-4 sm:space-y-0">
          {!showResult ? (
            name && email ? (
              currentQuestion < questions.length ? (
                <Question
                  question={questions[currentQuestion].question}
                  questionNumber={currentQuestion}
                  options={questions[currentQuestion].options}
                  onSelectOption={handleSelectOption}
                  timeLeft={timeLeft}
                />
              ) : null
            ) : (
              <Form onStartQuiz={handleStartQuiz} />
            )
          ) : (
            <Result name={name} score={score} />
          )}
        </div>
      </>
    );
  };
  
  export default Main;