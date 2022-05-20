import React from 'react';

const ContainerPage:React.FC<any> = ({children}) => {
  return (
    <div className="container">
      {children}
    </div>
  );
}

export default ContainerPage;