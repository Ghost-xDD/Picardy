import React from 'react';
import { useState } from 'react';
import { BsChevronDoubleUp, BsChevronDoubleDown } from 'react-icons/bs';

const FAQ = ({ question, answer }) => {
  const [expand, setExpand] = useState(false);
  const expandClass = expand ? 'display' : 'hidden';
  const ansClass = `${expandClass} p-5 text-xl`;
  const ansClass2 = `${expandClass} px-5 pt-6 font-[500] border-t-2  border-footerBlack text-xl`;

  return (
    <>
      <div className="mt-16 mx-auto text-black shadow rounded  border-footerBlack border-t-2 border-b-2 w-full md:w-3/4 transition-all duration-500">
        <div className="p-4 text-xl font-medium flex w-full">
          <div
            className="w-full cursor-pointer transition-all duration-500"
            onClick={() => setExpand(!expand)}
          >
            {question}
          </div>
          <button
            aria-label="question-expand"
            className="text-xl p-4 focus:outline-none"
            onClick={() => setExpand(!expand)}
          >
            {expand ? (
              <BsChevronDoubleDown className="w-5 text-guideYellow font-bold" />
            ) : (
              <BsChevronDoubleUp className="w-5 text-guideYellow" />
            )}
          </button>
        </div>

        {/* <div className={ansClass2}>{question}</div> */}
        <div className={ansClass}>{answer}</div>
      </div>

      
    </>
  );
};

export default FAQ;
