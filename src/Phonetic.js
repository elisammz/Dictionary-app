import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="blank">
        📢
      </a>

      {props.phonetic.text}
    </div>
  );
}
