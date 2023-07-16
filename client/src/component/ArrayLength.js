import React from 'react';

const ArrayLengthContext = React.createContext({
  length: 0,
  updateLength: () => {},
});

export default ArrayLengthContext;