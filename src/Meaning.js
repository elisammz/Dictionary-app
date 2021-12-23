import React from "react";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h2 className="text-capitalize">{props.meaning.partOfSpeech}</h2>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">
              <strong>Definition: </strong>
              {definition.definition}
            </div>

            <div className="example">
              <strong>Example: </strong>
              <em>{definition.example}.</em>
            </div>

            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
