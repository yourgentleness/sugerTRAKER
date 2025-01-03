import React from 'react';
import { useState } from 'react';

export const Hinput = () => {

    const [input, setInput] = useState("");
  
    const eventHandler = (value) => {
      setInput(value);
    }
  
    return {
        input,
        eventHandler
    }

}
