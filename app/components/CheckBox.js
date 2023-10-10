"use client";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
const Checkbox = ({ text, id }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [customChecked, setClass] = useState("");
  useEffect(() => {
    if (isChecked) {
      setClass("customChecked");
    } else {
      setClass("");
    }
  }, [isChecked, customChecked]);
  return (
    <label
      htmlFor={id}
      className="cursor-pointer relative flex flex-row items-center bottom-0 p-3"
    >
      <input
        type="checkbox"
        id={id}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
        className={`peer appearance-none h-6 w-6 border-2 rounded-full border-orange-500 checked:border-green-500 relative ${customChecked}`}
      />
      {isChecked && (
        <FaCheckCircle className="text-green-500 h-4 w-4 absolute bottom-4 left-4 text-opacity-100 check-custom transition" />
      )}
      <span className="pl-3 peer-checked:line-through peer-checked:text-green-500">
        {text}
      </span>
    </label>
  );
};

export default Checkbox;
