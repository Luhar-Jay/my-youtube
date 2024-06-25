import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Movies" />
      <Button name="Live" />
      <Button name="Cricket" />
      <Button name="Soccer" />
      <Button name="News" />
      <Button name="Coocking" />
      <Button name="Valantines" />
    </div>
  );
};

export default ButtonList;
