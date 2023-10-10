"use client";
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import "./mock.css";

const MockExamsPage = (): JSX.Element => {
  const {t} = useTranslation(["translation", "mockexams"]);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isQuestionListVisible, setIsQuestionListVisible] = useState(true);
  const [examFinished, setExamFinished] = useState(false);
  const [examStarted, setExamStarted] = useState(() => {
    return localStorage.getItem("remainingTime") ? true : false;
  });
  

  const [remainingTime, setRemainingTime] = useState(() => {
    if (examFinished) {return 0;}
    const savedTime = localStorage.getItem("remainingTime");

    return savedTime ? JSON.parse(savedTime) : 2 * 60 * 60;
  });

  const [answers, setAnswers] = useState(() => {
      if (examFinished) {return {};}
      const savedAnswers = localStorage.getItem("answers");

      return savedAnswers ? JSON.parse(savedAnswers) : {};
  });


  // Handling answer change
  const handleAnswerChange = (questionNumber, selectedOption) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionNumber]: selectedOption
    }));
  };

  const endExam = () => {
    // Ensure unanswered questions are "-"
    const finalAnswers = {...answers};
    questions.forEach(q => {
        if (!finalAnswers.hasOwnProperty(q["Question Number"])) {
            finalAnswers[q["Question Number"]] = "-";
        }
    });

    console.log(finalAnswers); // This logs all the answers

    // Clear saved state
    localStorage.removeItem("remainingTime");
    localStorage.removeItem("answers");

    setExamFinished(true);  // Exam has ended
  };

  useEffect(() => {
    // Save timer and answers to localStorage
    localStorage.setItem("remainingTime", JSON.stringify(remainingTime));
    localStorage.setItem("answers", JSON.stringify(answers));
  }, [remainingTime, answers]);


  useEffect(() => {
    const timerId = setInterval(() => {
      setRemainingTime(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timerId);
          // End the exam here
          endExam();

          return 0;
        }

        return prevTime - 1;
      });
    }, 1000);
  
    // Cleanup interval on component unmount
    return () => {
      clearInterval(timerId);
    };
  }, []);
  
  const toggleQuestionList = () => {
      setIsQuestionListVisible(prevState => !prevState);
  };

  useEffect(() => {
    if (examFinished) {
        return;
    }

    const timerId = setInterval(() => {
        setRemainingTime(prevTime => {
            if (prevTime <= 1) {
                clearInterval(timerId);
                // End the exam here
                endExam();

                return 0;
            }

            return prevTime - 1;
          });
      }, 1000);

      // Cleanup interval on component unmount
      return () => {
          clearInterval(timerId);
      };
    }, [examFinished]);


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
      },
      {
        "Question Number": "1",
        "Question": "What is common between the practices of \u201cBatra\u201d, \u201cBewar\u201d and \u201cPodu\u201d as known across various states of India? These are haats setup by nomadic traders.A. These are different terms used for shifting cultivation.B. These are water harvesting practices.C. None of the above",
        "Correct Answer": "B",
        "Answer Justification": "Learning:Bewar is the shifting cultivation of Madhya Pradesh.Other local names of shifting cultivation include: Jhum in North-eastern India; Zara and Ekra in Southern states; Podu in Andhra Pradesh; Kumari in Western Ghats. Bewar: In Magh month, shifts are made to new bewars (from old bewars) and tribals rely on hunting-gathering as the main subsistence activity.The tribals livein the bewar fields. Only after a few years, when the land productivity declines, tribals supplement their diets with forest products.",
        "option_a": "These are haats setup by nomadic traders.",
        "option_b": "These are different terms used for shifting cultivation.",
        "option_c": "These are water harvesting practices.",
        "option_d": "None of the above"
      },
      {
        "Question Number": "2",
        "Question": "Consider the following about Compressed Natural Gas (CNG). It has a higher auto-ignition temperature compared to petrol or diesel.1. It contains lead and therefore is of an environmental concern.2. It has a lower calorific value compared to petrol or diesel.3. Select the correct answer using the codes below. 1 and 2 onlyA. 2 and 3 onlyB. 1 only C. 1, 2 and 3",
        "Correct Answer": "C",
        "Answer Justification": "Justification: CNG is made by compressing natural gas (which is mainly composed of methane, CH4), to less than 1 percent of the volume it occupies at standard atmospheric pressure The auto-ignition temperature is over 500 degree Celsius. It also has a narrow range of flammability which makes it safer than petrol and diesel. CNG mixes well with air and disperses quickly clearing the area of fire. It does not contain lead which makes it safer than other fuels. CNG has a higher calorific value than diesel and petrol. So, 3 is wrong. The cost and placement of fuel storage tanks is the major barrier to wider/quicker adoption of CNG as a fuel. It is also why municipal government, public transportation vehicles were the most visible early adopters of it, as they can more quickly amortize the money invested in the new (and usually 8cheaper) fuel.",
        "option_a": "1 and 2 only",
        "option_b": "2 and 3 only",
        "option_c": "1 only",
        "option_d": "1, 2 and 3"
      },
      {
        "Question Number": "3",
        "Question": "What is common between the practices of \u201cBatra\u201d, \u201cBewar\u201d and \u201cPodu\u201d as known across various states of India? These are haats setup by nomadic traders.A. These are different terms used for shifting cultivation.B. These are water harvesting practices.C. None of the above",
        "Correct Answer": "B",
        "Answer Justification": "Learning:Bewar is the shifting cultivation of Madhya Pradesh.Other local names of shifting cultivation include: Jhum in North-eastern India; Zara and Ekra in Southern states; Podu in Andhra Pradesh; Kumari in Western Ghats. Bewar: In Magh month, shifts are made to new bewars (from old bewars) and tribals rely on hunting-gathering as the main subsistence activity.The tribals livein the bewar fields. Only after a few years, when the land productivity declines, tribals supplement their diets with forest products.",
        "option_a": "These are haats setup by nomadic traders.",
        "option_b": "These are different terms used for shifting cultivation.",
        "option_c": "These are water harvesting practices.",
        "option_d": "None of the above"
      },
      {
        "Question Number": "4",
        "Question": "Consider the following about Compressed Natural Gas (CNG). It has a higher auto-ignition temperature compared to petrol or diesel.1. It contains lead and therefore is of an environmental concern.2. It has a lower calorific value compared to petrol or diesel.3. Select the correct answer using the codes below. 1 and 2 onlyA. 2 and 3 onlyB. 1 only C. 1, 2 and 3",
        "Correct Answer": "C",
        "Answer Justification": "Justification: CNG is made by compressing natural gas (which is mainly composed of methane, CH4), to less than 1 percent of the volume it occupies at standard atmospheric pressure The auto-ignition temperature is over 500 degree Celsius. It also has a narrow range of flammability which makes it safer than petrol and diesel. CNG mixes well with air and disperses quickly clearing the area of fire. It does not contain lead which makes it safer than other fuels. CNG has a higher calorific value than diesel and petrol. So, 3 is wrong. The cost and placement of fuel storage tanks is the major barrier to wider/quicker adoption of CNG as a fuel. It is also why municipal government, public transportation vehicles were the most visible early adopters of it, as they can more quickly amortize the money invested in the new (and usually 8cheaper) fuel.",
        "option_a": "1 and 2 only",
        "option_b": "2 and 3 only",
        "option_c": "1 only",
        "option_d": "1, 2 and 3"
      },
      {
        "Question Number": "5",
        "Question": "What is common between the practices of \u201cBatra\u201d, \u201cBewar\u201d and \u201cPodu\u201d as known across various states of India? These are haats setup by nomadic traders.A. These are different terms used for shifting cultivation.B. These are water harvesting practices.C. None of the above",
        "Correct Answer": "B",
        "Answer Justification": "Learning:Bewar is the shifting cultivation of Madhya Pradesh.Other local names of shifting cultivation include: Jhum in North-eastern India; Zara and Ekra in Southern states; Podu in Andhra Pradesh; Kumari in Western Ghats. Bewar: In Magh month, shifts are made to new bewars (from old bewars) and tribals rely on hunting-gathering as the main subsistence activity.The tribals livein the bewar fields. Only after a few years, when the land productivity declines, tribals supplement their diets with forest products.",
        "option_a": "These are haats setup by nomadic traders.",
        "option_b": "These are different terms used for shifting cultivation.",
        "option_c": "These are water harvesting practices.",
        "option_d": "None of the above"
      },
      {
        "Question Number": "6",
        "Question": "Consider the following about Compressed Natural Gas (CNG). It has a higher auto-ignition temperature compared to petrol or diesel.1. It contains lead and therefore is of an environmental concern.2. It has a lower calorific value compared to petrol or diesel.3. Select the correct answer using the codes below. 1 and 2 onlyA. 2 and 3 onlyB. 1 only C. 1, 2 and 3",
        "Correct Answer": "C",
        "Answer Justification": "Justification: CNG is made by compressing natural gas (which is mainly composed of methane, CH4), to less than 1 percent of the volume it occupies at standard atmospheric pressure The auto-ignition temperature is over 500 degree Celsius. It also has a narrow range of flammability which makes it safer than petrol and diesel. CNG mixes well with air and disperses quickly clearing the area of fire. It does not contain lead which makes it safer than other fuels. CNG has a higher calorific value than diesel and petrol. So, 3 is wrong. The cost and placement of fuel storage tanks is the major barrier to wider/quicker adoption of CNG as a fuel. It is also why municipal government, public transportation vehicles were the most visible early adopters of it, as they can more quickly amortize the money invested in the new (and usually 8cheaper) fuel.",
        "option_a": "1 and 2 only",
        "option_b": "2 and 3 only",
        "option_c": "1 only",
        "option_d": "1, 2 and 3"
      },
      {
        "Question Number": "7",
        "Question": "What is common between the practices of \u201cBatra\u201d, \u201cBewar\u201d and \u201cPodu\u201d as known across various states of India? These are haats setup by nomadic traders.A. These are different terms used for shifting cultivation.B. These are water harvesting practices.C. None of the above",
        "Correct Answer": "B",
        "Answer Justification": "Learning:Bewar is the shifting cultivation of Madhya Pradesh.Other local names of shifting cultivation include: Jhum in North-eastern India; Zara and Ekra in Southern states; Podu in Andhra Pradesh; Kumari in Western Ghats. Bewar: In Magh month, shifts are made to new bewars (from old bewars) and tribals rely on hunting-gathering as the main subsistence activity.The tribals livein the bewar fields. Only after a few years, when the land productivity declines, tribals supplement their diets with forest products.",
        "option_a": "These are haats setup by nomadic traders.",
        "option_b": "These are different terms used for shifting cultivation.",
        "option_c": "These are water harvesting practices.",
        "option_d": "None of the above"
      },
      {
        "Question Number": "8",
        "Question": "Consider the following about Compressed Natural Gas (CNG). It has a higher auto-ignition temperature compared to petrol or diesel.1. It contains lead and therefore is of an environmental concern.2. It has a lower calorific value compared to petrol or diesel.3. Select the correct answer using the codes below. 1 and 2 onlyA. 2 and 3 onlyB. 1 only C. 1, 2 and 3",
        "Correct Answer": "C",
        "Answer Justification": "Justification: CNG is made by compressing natural gas (which is mainly composed of methane, CH4), to less than 1 percent of the volume it occupies at standard atmospheric pressure The auto-ignition temperature is over 500 degree Celsius. It also has a narrow range of flammability which makes it safer than petrol and diesel. CNG mixes well with air and disperses quickly clearing the area of fire. It does not contain lead which makes it safer than other fuels. CNG has a higher calorific value than diesel and petrol. So, 3 is wrong. The cost and placement of fuel storage tanks is the major barrier to wider/quicker adoption of CNG as a fuel. It is also why municipal government, public transportation vehicles were the most visible early adopters of it, as they can more quickly amortize the money invested in the new (and usually 8cheaper) fuel.",
        "option_a": "1 and 2 only",
        "option_b": "2 and 3 only",
        "option_c": "1 only",
        "option_d": "1, 2 and 3"
      },
      {
        "Question Number": "9",
        "Question": "What is common between the practices of \u201cBatra\u201d, \u201cBewar\u201d and \u201cPodu\u201d as known across various states of India? These are haats setup by nomadic traders.A. These are different terms used for shifting cultivation.B. These are water harvesting practices.C. None of the above",
        "Correct Answer": "B",
        "Answer Justification": "Learning:Bewar is the shifting cultivation of Madhya Pradesh.Other local names of shifting cultivation include: Jhum in North-eastern India; Zara and Ekra in Southern states; Podu in Andhra Pradesh; Kumari in Western Ghats. Bewar: In Magh month, shifts are made to new bewars (from old bewars) and tribals rely on hunting-gathering as the main subsistence activity.The tribals livein the bewar fields. Only after a few years, when the land productivity declines, tribals supplement their diets with forest products.",
        "option_a": "These are haats setup by nomadic traders.",
        "option_b": "These are different terms used for shifting cultivation.",
        "option_c": "These are water harvesting practices.",
        "option_d": "None of the above"
      },
      {
        "Question Number": "10",
        "Question": "Consider the following about Compressed Natural Gas (CNG). It has a higher auto-ignition temperature compared to petrol or diesel.1. It contains lead and therefore is of an environmental concern.2. It has a lower calorific value compared to petrol or diesel.3. Select the correct answer using the codes below. 1 and 2 onlyA. 2 and 3 onlyB. 1 only C. 1, 2 and 3",
        "Correct Answer": "C",
        "Answer Justification": "Justification: CNG is made by compressing natural gas (which is mainly composed of methane, CH4), to less than 1 percent of the volume it occupies at standard atmospheric pressure The auto-ignition temperature is over 500 degree Celsius. It also has a narrow range of flammability which makes it safer than petrol and diesel. CNG mixes well with air and disperses quickly clearing the area of fire. It does not contain lead which makes it safer than other fuels. CNG has a higher calorific value than diesel and petrol. So, 3 is wrong. The cost and placement of fuel storage tanks is the major barrier to wider/quicker adoption of CNG as a fuel. It is also why municipal government, public transportation vehicles were the most visible early adopters of it, as they can more quickly amortize the money invested in the new (and usually 8cheaper) fuel.",
        "option_a": "1 and 2 only",
        "option_b": "2 and 3 only",
        "option_c": "1 only",
        "option_d": "1, 2 and 3"
      },
      {
        "Question Number": "11",
        "Question": "What is common between the practices of \u201cBatra\u201d, \u201cBewar\u201d and \u201cPodu\u201d as known across various states of India? These are haats setup by nomadic traders.A. These are different terms used for shifting cultivation.B. These are water harvesting practices.C. None of the above",
        "Correct Answer": "B",
        "Answer Justification": "Learning:Bewar is the shifting cultivation of Madhya Pradesh.Other local names of shifting cultivation include: Jhum in North-eastern India; Zara and Ekra in Southern states; Podu in Andhra Pradesh; Kumari in Western Ghats. Bewar: In Magh month, shifts are made to new bewars (from old bewars) and tribals rely on hunting-gathering as the main subsistence activity.The tribals livein the bewar fields. Only after a few years, when the land productivity declines, tribals supplement their diets with forest products.",
        "option_a": "These are haats setup by nomadic traders.",
        "option_b": "These are different terms used for shifting cultivation.",
        "option_c": "These are water harvesting practices.",
        "option_d": "None of the above"
      },
      {
        "Question Number": "12",
        "Question": "Consider the following about Compressed Natural Gas (CNG). It has a higher auto-ignition temperature compared to petrol or diesel.1. It contains lead and therefore is of an environmental concern.2. It has a lower calorific value compared to petrol or diesel.3. Select the correct answer using the codes below. 1 and 2 onlyA. 2 and 3 onlyB. 1 only C. 1, 2 and 3",
        "Correct Answer": "C",
        "Answer Justification": "Justification: CNG is made by compressing natural gas (which is mainly composed of methane, CH4), to less than 1 percent of the volume it occupies at standard atmospheric pressure The auto-ignition temperature is over 500 degree Celsius. It also has a narrow range of flammability which makes it safer than petrol and diesel. CNG mixes well with air and disperses quickly clearing the area of fire. It does not contain lead which makes it safer than other fuels. CNG has a higher calorific value than diesel and petrol. So, 3 is wrong. The cost and placement of fuel storage tanks is the major barrier to wider/quicker adoption of CNG as a fuel. It is also why municipal government, public transportation vehicles were the most visible early adopters of it, as they can more quickly amortize the money invested in the new (and usually 8cheaper) fuel.",
        "option_a": "1 and 2 only",
        "option_b": "2 and 3 only",
        "option_c": "1 only",
        "option_d": "1, 2 and 3"
      },
      {
        "Question Number": "13",
        "Question": "What is common between the practices of \u201cBatra\u201d, \u201cBewar\u201d and \u201cPodu\u201d as known across various states of India? These are haats setup by nomadic traders.A. These are different terms used for shifting cultivation.B. These are water harvesting practices.C. None of the above",
        "Correct Answer": "B",
        "Answer Justification": "Learning:Bewar is the shifting cultivation of Madhya Pradesh.Other local names of shifting cultivation include: Jhum in North-eastern India; Zara and Ekra in Southern states; Podu in Andhra Pradesh; Kumari in Western Ghats. Bewar: In Magh month, shifts are made to new bewars (from old bewars) and tribals rely on hunting-gathering as the main subsistence activity.The tribals livein the bewar fields. Only after a few years, when the land productivity declines, tribals supplement their diets with forest products.",
        "option_a": "These are haats setup by nomadic traders.",
        "option_b": "These are different terms used for shifting cultivation.",
        "option_c": "These are water harvesting practices.",
        "option_d": "None of the above"
      },
      {
        "Question Number": "14",
        "Question": "Consider the following about Compressed Natural Gas (CNG). It has a higher auto-ignition temperature compared to petrol or diesel.1. It contains lead and therefore is of an environmental concern.2. It has a lower calorific value compared to petrol or diesel.3. Select the correct answer using the codes below. 1 and 2 onlyA. 2 and 3 onlyB. 1 only C. 1, 2 and 3",
        "Correct Answer": "C",
        "Answer Justification": "Justification: CNG is made by compressing natural gas (which is mainly composed of methane, CH4), to less than 1 percent of the volume it occupies at standard atmospheric pressure The auto-ignition temperature is over 500 degree Celsius. It also has a narrow range of flammability which makes it safer than petrol and diesel. CNG mixes well with air and disperses quickly clearing the area of fire. It does not contain lead which makes it safer than other fuels. CNG has a higher calorific value than diesel and petrol. So, 3 is wrong. The cost and placement of fuel storage tanks is the major barrier to wider/quicker adoption of CNG as a fuel. It is also why municipal government, public transportation vehicles were the most visible early adopters of it, as they can more quickly amortize the money invested in the new (and usually 8cheaper) fuel.",
        "option_a": "1 and 2 only",
        "option_b": "2 and 3 only",
        "option_c": "1 only",
        "option_d": "1, 2 and 3"
      },
      {
        "Question Number": "15",
        "Question": "What is common between the practices of \u201cBatra\u201d, \u201cBewar\u201d and \u201cPodu\u201d as known across various states of India? These are haats setup by nomadic traders.A. These are different terms used for shifting cultivation.B. These are water harvesting practices.C. None of the above",
        "Correct Answer": "B",
        "Answer Justification": "Learning:Bewar is the shifting cultivation of Madhya Pradesh.Other local names of shifting cultivation include: Jhum in North-eastern India; Zara and Ekra in Southern states; Podu in Andhra Pradesh; Kumari in Western Ghats. Bewar: In Magh month, shifts are made to new bewars (from old bewars) and tribals rely on hunting-gathering as the main subsistence activity.The tribals livein the bewar fields. Only after a few years, when the land productivity declines, tribals supplement their diets with forest products.",
        "option_a": "These are haats setup by nomadic traders.",
        "option_b": "These are different terms used for shifting cultivation.",
        "option_c": "These are water harvesting practices.",
        "option_d": "None of the above"
      },
      {
        "Question Number": "16",
        "Question": "Consider the following about Compressed Natural Gas (CNG). It has a higher auto-ignition temperature compared to petrol or diesel.1. It contains lead and therefore is of an environmental concern.2. It has a lower calorific value compared to petrol or diesel.3. Select the correct answer using the codes below. 1 and 2 onlyA. 2 and 3 onlyB. 1 only C. 1, 2 and 3",
        "Correct Answer": "C",
        "Answer Justification": "Justification: CNG is made by compressing natural gas (which is mainly composed of methane, CH4), to less than 1 percent of the volume it occupies at standard atmospheric pressure The auto-ignition temperature is over 500 degree Celsius. It also has a narrow range of flammability which makes it safer than petrol and diesel. CNG mixes well with air and disperses quickly clearing the area of fire. It does not contain lead which makes it safer than other fuels. CNG has a higher calorific value than diesel and petrol. So, 3 is wrong. The cost and placement of fuel storage tanks is the major barrier to wider/quicker adoption of CNG as a fuel. It is also why municipal government, public transportation vehicles were the most visible early adopters of it, as they can more quickly amortize the money invested in the new (and usually 8cheaper) fuel.",
        "option_a": "1 and 2 only",
        "option_b": "2 and 3 only",
        "option_c": "1 only",
        "option_d": "1, 2 and 3"
      },
      {
        "Question Number": "17",
        "Question": "What is common between the practices of \u201cBatra\u201d, \u201cBewar\u201d and \u201cPodu\u201d as known across various states of India? These are haats setup by nomadic traders.A. These are different terms used for shifting cultivation.B. These are water harvesting practices.C. None of the above",
        "Correct Answer": "B",
        "Answer Justification": "Learning:Bewar is the shifting cultivation of Madhya Pradesh.Other local names of shifting cultivation include: Jhum in North-eastern India; Zara and Ekra in Southern states; Podu in Andhra Pradesh; Kumari in Western Ghats. Bewar: In Magh month, shifts are made to new bewars (from old bewars) and tribals rely on hunting-gathering as the main subsistence activity.The tribals livein the bewar fields. Only after a few years, when the land productivity declines, tribals supplement their diets with forest products.",
        "option_a": "These are haats setup by nomadic traders.",
        "option_b": "These are different terms used for shifting cultivation.",
        "option_c": "These are water harvesting practices.",
        "option_d": "None of the above"
      },
      {
        "Question Number": "18",
        "Question": "Consider the following about Compressed Natural Gas (CNG). It has a higher auto-ignition temperature compared to petrol or diesel.1. It contains lead and therefore is of an environmental concern.2. It has a lower calorific value compared to petrol or diesel.3. Select the correct answer using the codes below. 1 and 2 onlyA. 2 and 3 onlyB. 1 only C. 1, 2 and 3",
        "Correct Answer": "C",
        "Answer Justification": "Justification: CNG is made by compressing natural gas (which is mainly composed of methane, CH4), to less than 1 percent of the volume it occupies at standard atmospheric pressure The auto-ignition temperature is over 500 degree Celsius. It also has a narrow range of flammability which makes it safer than petrol and diesel. CNG mixes well with air and disperses quickly clearing the area of fire. It does not contain lead which makes it safer than other fuels. CNG has a higher calorific value than diesel and petrol. So, 3 is wrong. The cost and placement of fuel storage tanks is the major barrier to wider/quicker adoption of CNG as a fuel. It is also why municipal government, public transportation vehicles were the most visible early adopters of it, as they can more quickly amortize the money invested in the new (and usually 8cheaper) fuel.",
        "option_a": "1 and 2 only",
        "option_b": "2 and 3 only",
        "option_c": "1 only",
        "option_d": "1, 2 and 3"
      },
      {
        "Question Number": "19",
        "Question": "What is common between the practices of \u201cBatra\u201d, \u201cBewar\u201d and \u201cPodu\u201d as known across various states of India? These are haats setup by nomadic traders.A. These are different terms used for shifting cultivation.B. These are water harvesting practices.C. None of the above",
        "Correct Answer": "B",
        "Answer Justification": "Learning:Bewar is the shifting cultivation of Madhya Pradesh.Other local names of shifting cultivation include: Jhum in North-eastern India; Zara and Ekra in Southern states; Podu in Andhra Pradesh; Kumari in Western Ghats. Bewar: In Magh month, shifts are made to new bewars (from old bewars) and tribals rely on hunting-gathering as the main subsistence activity.The tribals livein the bewar fields. Only after a few years, when the land productivity declines, tribals supplement their diets with forest products.",
        "option_a": "These are haats setup by nomadic traders.",
        "option_b": "These are different terms used for shifting cultivation.",
        "option_c": "These are water harvesting practices.",
        "option_d": "None of the above"
      },
      {
        "Question Number": "20",
        "Question": "Consider the following about Compressed Natural Gas (CNG). It has a higher auto-ignition temperature compared to petrol or diesel.1. It contains lead and therefore is of an environmental concern.2. It has a lower calorific value compared to petrol or diesel.3. Select the correct answer using the codes below. 1 and 2 onlyA. 2 and 3 onlyB. 1 only C. 1, 2 and 3",
        "Correct Answer": "C",
        "Answer Justification": "Justification: CNG is made by compressing natural gas (which is mainly composed of methane, CH4), to less than 1 percent of the volume it occupies at standard atmospheric pressure The auto-ignition temperature is over 500 degree Celsius. It also has a narrow range of flammability which makes it safer than petrol and diesel. CNG mixes well with air and disperses quickly clearing the area of fire. It does not contain lead which makes it safer than other fuels. CNG has a higher calorific value than diesel and petrol. So, 3 is wrong. The cost and placement of fuel storage tanks is the major barrier to wider/quicker adoption of CNG as a fuel. It is also why municipal government, public transportation vehicles were the most visible early adopters of it, as they can more quickly amortize the money invested in the new (and usually 8cheaper) fuel.",
        "option_a": "1 and 2 only",
        "option_b": "2 and 3 only",
        "option_c": "1 only",
        "option_d": "1, 2 and 3"
      }
    ];

    const initialAnswers = {};
    hardcodedQuestions.forEach(q => {
      if (!answers.hasOwnProperty(q["Question Number"])) {
        initialAnswers[q["Question Number"]] = "-";
      }
    });
    
    setAnswers(prevAnswers => ({ ...prevAnswers, ...initialAnswers }));
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
        {examFinished ? (
             <div className="exam-finished-message">
                <h2>Exam Finished. </h2>
                <p>Thank you for taking the mock exam. Your answers have been submitted.</p>
            </div>
        ) : (
            <div className="container">
                {/* Middle Section */}
                <div className={`middle-section ${isQuestionListVisible ? "" : "no-sidebar"}`}>
                    {/* Left Sidebar */}
                    {isQuestionListVisible && (
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
                                    <strong>Q{q["Question Number"]}: </strong>{q["Question"]}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Main Question Window */}
                    <div className={`main-question-window ${isQuestionListVisible ? "with-sidebar" : ""}`}>
                        {/* Main Question Window Header */}
                        <div className="top-header">
                            <span>Mock Exam ID: XYZ123</span>
                            <span>
                                {Math.floor(remainingTime / 3600)} Hr: 
                                {Math.floor((remainingTime % 3600) / 60)} min: 
                                {remainingTime % 60} sec
                            </span>
                            <button onClick={endExam}>Submit</button>
                        </div>

                        <div className="question-content">
                            {loading ? "Loading..." : (
                                <>
                                    <h3>{currentQuestion["Question"]}</h3>
                                    {['a', 'b', 'c', 'd'].map(optionKey => (
                                        <div key={optionKey}>
                                            <input 
                                                type="radio" 
                                                name={`question-${currentQuestion["Question Number"]}`} 
                                                value={optionKey} 
                                                onChange={() => handleAnswerChange(currentQuestion["Question Number"], optionKey)} 
                                                checked={answers[currentQuestion["Question Number"]] === optionKey}
                                            />
                                            <label>
                                                {optionKey.toUpperCase()}. {currentQuestion[`option_${optionKey}`]}
                                            </label>
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>

                        {/* Main Question Window Footer */}
                        <div className="bottom-footer">
                            <button onClick={goToPreviousQuestion}>Previous</button>
                            <button onClick={goToNextQuestion}>Next</button>
                            
                            {/* Add this button to allow users to toggle the question list */}
                            <button onClick={toggleQuestionList} className="toggleButton">
                                {isQuestionListVisible ? "Hide Question List" : "Show Question List"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
);



};

export default MockExamsPage;
