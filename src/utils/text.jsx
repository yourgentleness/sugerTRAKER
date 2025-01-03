import React from "react";

export const formatText = (text) => {
    return text.split(" ").map((char, index) => (
      <span
        key={index}
        style={{display: 'inline-block', margin: '0 4px'}}
      >
        {char}
      </span>
    ))
  }