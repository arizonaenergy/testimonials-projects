import React from "react";

export default function Title(props) {
  return (
    <h2
      className={
        !props.classes ? "title" : props.classes || "title text-center"
      }
    >
      {!props.text ? "Ttitle" : props.text}
    </h2>
  );
}
