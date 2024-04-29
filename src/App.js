import React, { useState } from "react";
import data from "./Data";
import Questions from "./Questions";

export default function App() {
  const [questionData, setquestionData] = useState(data);
  const [showInfo, setshowInfo] = useState(false);

  return (
    <div className="w-[100%] h-[100vh] bg-[purple] flex items-center justify-center">
      <div className="w-[70%] h-[80%] bg-[white] flex rounded-md p-7">
        <p className="text-[32px] font-bold w-[35%]">
          Questions And Answers About Login
        </p>
        <div className="w-[60%] h-[80%] border-2">
          {questionData.map((question) => {
            return (
              <Questions key={question.id} {...question} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
