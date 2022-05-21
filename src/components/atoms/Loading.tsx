import React from 'react';

const Loading = () => {
  return (
    <div className="center">
      <div className="load_spinner">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
      <p style={{fontWeight: "bold", fontSize: 20, marginLeft: 20}}>
        Buscando...
      </p>
    </div>
  );
}

export default Loading;