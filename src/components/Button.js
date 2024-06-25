import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="py-2 m-2 bg-slate-200 px-5 rounded-lg">{name}</button>
    </div>
  );
};

export default Button;
