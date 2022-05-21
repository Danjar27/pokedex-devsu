import React from 'react';

interface Props {
  name: string;
}

const NoResults: React.FC<Props> = ({
  name,
}) => {
  return (
    <div className="center" style={{marginTop: 20}}>
      <img
        style={{width: 60}}
        src={"/images/no_results_icon.svg"}
        alt="no results"
      />
      <h3>
        No se encontró ningún pokemon con el nombre {name}
      </h3>
    </div>
  );
}

export default NoResults;