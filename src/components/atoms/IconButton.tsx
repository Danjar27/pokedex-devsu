import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  onClick: () => void;
}


const IconButton:React.FC<Props> = ({
  icon,
  ...props
}) => {
  return (
    <button className="icon_button"  {...props}>
      <img src={icon} alt="icon" />
    </button>
  );
}

export default IconButton;