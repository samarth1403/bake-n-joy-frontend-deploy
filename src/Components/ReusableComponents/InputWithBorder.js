import React from "react";
import classNames from "classnames";

const InputWithBorder = ({ className, ...rest }) => {
  const finalClass = classNames(
    className,
    "text-[#090b2b] font-roboto font-[400] text-xl rounded-[15px] bg-[#fff] px-4 m-4 shadow-[6px_6px_2px_#090b2b]"
  );
  return <input className={finalClass} {...rest} />;
};

export default InputWithBorder;
