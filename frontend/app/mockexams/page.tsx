"use client";
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import "./mock.css";

const MockExamsPage = (): JSX.Element => {
  const {t} = useTranslation(["translation", "mockexams"]);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock/hardcoded questions
    const hardcodedQuestions = [
      {
        "Question Number": "96",
        "Question": "What is common between the practices of \u201cBatra\u201d, \u201cBewar\u201d and \u201cPodu\u201d as known across various states of India? These are haats setup by nomadic traders.A. These are different terms used for shifting cultivation.B. These are water harvesting practices.C. None of the above",
        "Correct Answer": "B",
        "Answer Justification": "Learning:Bewar is the shifting cultivation of Madhya Pradesh.Other local names of shifting cultivation include: Jhum in North-eastern India; Zara and Ekra in Southern states; Podu in Andhra Pradesh; Kumari in Western Ghats. Bewar: In Magh month, shifts are made to new bewars (from old bewars) and tribals rely on hunting-gathering as the main subsistence activity.The tribals livein the bewar fields. Only after a few years, when the land productivity declines, tribals supplement their diets with forest products.",
        "option_a": "These are haats setup by nomadic traders.",
        "option_b": "These are different terms used for shifting cultivation.",
        "option_c": "These are water harvesting practices.",
        "option_d": "None of the above"
      },
      {
        "Question Number": "97",
        "Question": "Consider the following about Compressed Natural Gas (CNG). It has a higher auto-ignition temperature compared to petrol or diesel.1. It contains lead and therefore is of an environmental concern.2. It has a lower calorific value compared to petrol or diesel.3. Select the correct answer using the codes below. 1 and 2 onlyA. 2 and 3 onlyB. 1 only C. 1, 2 and 3",
        "Correct Answer": "C",
        "Answer Justification": "Justification: CNG is made by compressing natural gas (which is mainly composed of methane, CH4), to less than 1 percent of the volume it occupies at standard atmospheric pressure The auto-ignition temperature is over 500 degree Celsius. It also has a narrow range of flammability which makes it safer than petrol and diesel. CNG mixes well with air and disperses quickly clearing the area of fire. It does not contain lead which makes it safer than other fuels. CNG has a higher calorific value than diesel and petrol. So, 3 is wrong. The cost and placement of fuel storage tanks is the major barrier to wider/quicker adoption of CNG as a fuel. It is also why municipal government, public transportation vehicles were the most visible early adopters of it, as they can more quickly amortize the money invested in the new (and usually 8cheaper) fuel.",
        "option_a": "1 and 2 only",
        "option_b": "2 and 3 only",
        "option_c": "1 only",
        "option_d": "1, 2 and 3"
      }
    ];

    // Set the hardcoded questions to state
    setQuestions(hardcodedQuestions);
    setLoading(false);
  }, []);

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="container">
      {/* Middle Section */}
      <div className="middle-section">
          {/* Left Sidebar */}
          <div className="left-sidebar">
              {/* Left Sidebar Header */}
              <div className="left-sidebar-header">
                  <h3>Questions List</h3>
              </div>

              {questions.map((q, index) => (
                  <div 
                    key={index} 
                    className={`question-preview ${index === currentQuestionIndex ? "active-question" : ""}`}
                    onClick={() => setCurrentQuestionIndex(index)}
                  >
                    {q["Question"]}
                  </div>
              ))}
          </div>

          {/* Main Question Window */}
          <div className="main-question-window">
              {/* Main Question Window Header */}
              <div className="top-header">
                  <span>Mock Exam ID: XYZ123</span>
                  <span>1 Hr: 55 min:00 sec</span>
                  <button>Submit</button>
              </div>

              {loading ? "Loading..." : (
                <>
                  <h3>{currentQuestion["Question"]}</h3>
                  {['a', 'b', 'c', 'd'].map(optionKey => (
                    <div key={optionKey}>
                      <input 
                        type="radio" 
                        name={`question-${currentQuestion["Question Number"]}`} 
                        value={optionKey} 
                      />
                      <label>
                        {optionKey.toUpperCase()}. {currentQuestion[`option_${optionKey}`]}
                      </label>
                    </div>
                  ))}
                </>
              )}

              {/* Main Question Window Footer */}
              <div className="bottom-footer">
                  <button onClick={goToPreviousQuestion}>Previous</button>
                  <button onClick={goToNextQuestion}>Next</button>
              </div>
          </div>
      </div>
    </div>
  );
};

export default MockExamsPage;
