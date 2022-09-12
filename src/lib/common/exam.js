const stringifyExamData = (examData) => {
  let strExamData = "";
  examData.questions.forEach((question, index) => {
    strExamData += `Q${index + 1}: ${question.data}\n`;
    question.answers.forEach((answer, index) => {
      strExamData += `A${index + 1}:${answer.isCorrect}: ${
        answer.data
      }:ENDOFLINE:\n`;
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
    examArray.forEach((examLine) => {
      if (examLine === "") return;
      const examLineArray = examLine.split(":");
      if (examLineArray[0].startsWith("Q")) {
        examData.questions.push({
          data: examLineArray[1],
          answers: [],
        });
      } else if (examLineArray[0].startsWith("A")) {
        examData.questions[examData.questions.length - 1].answers.push({
          isCorrect: examLineArray[1] === "true",
          data: examLineArray[2],
        });
      } else {
        throw new Error("Invalid exam data");
      }
    });
    return examData;
  } catch (err) {
    return null;
  }
};

export { stringifyExamData, parseExamData };
