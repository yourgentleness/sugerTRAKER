import React from 'react';

export function InputConponent ({onChange}) {
    return (
      <input 
      type="text"
      
      onChange={(e) => onChange(e.target.value)}
      />
    );
  }

