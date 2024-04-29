import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";


export default function Questions({title,info}) {
  const [showInfo, setshowInfo] = useState(false);
  return (
    <div>
      <div className="w-[90] pt-5 pb-5 border-2 flex flex-col items-center justify-center">
        <div className="w-[90%] flex justify-between">
          <p className="text-[18px] font-semibold ">{title}</p>
          <button
            className="w-[30px] h-[30px] border-2 border-[black] rounded-full flex items-center justify-center"
            onClick={() => setshowInfo(!showInfo)}
          >
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
        {showInfo && <p className="text-[15px] w-[90%]">{info}</p>}
      </div>
    </div>
  );
}
