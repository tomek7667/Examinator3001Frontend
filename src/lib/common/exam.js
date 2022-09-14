const stringifyExamData = (examData) => {
  let strExamData = "";
  examData.questions.forEach((question, index) => {
    strExamData += `Q${index + 1}:${question.text.trim()}:ENDOFLINE:\n`;
    question.answers.forEach((answer, index) => {
      strExamData += `A${index + 1}:${
        answer.isCorrect
      }:${answer.text.trim()}:ENDOFLINE:\n`;
    });
  });
  return strExamData;
};

const parseExamData = (strExamData) => {
  try {
    const examArray = strExamData.split(":ENDOFLINE:\n");
    const examData = {
      questions: [],
    };
    let question = {
      text: "",
      answers: [],
    };
    examArray.forEach((line) => {
      if (line.startsWith("Q")) {
        if (question.text !== "") {
          examData.questions.push(question);
        }
        question = {
          text: line.split(":")[1],
          answers: [],
        };
      } else if (line.startsWith("A")) {
        const answer = {
          text: line.split(":")[2],
          isCorrect: line.split(":")[1] === "true",
        };
        question.answers.push(answer);
      }
    });
    examData.questions.push(question);
    return examData;
  } catch (err) {
    return null;
  }
};

export { stringifyExamData, parseExamData };
