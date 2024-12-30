// src/components/ui/card.js

import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`bg-slate-800 border border-slate-700 rounded-lg p-6 shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export { Card };