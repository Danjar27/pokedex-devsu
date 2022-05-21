import React from 'react';

type buttonType = 'button' | 'submit' | 'reset'

interface Props extends React.HTMLProps<HTMLButtonElement> {
  text: string;
  type?: buttonType;
  icon?: string;
}

const RoundedButton: React.FC<Props> = ({
  text,
  type,
  icon,
  ...props
}) => {
  return (
    <button
      className={`RoundedButton center ${props.disabled && 'disabled'}`}
      type={type || "button"}
      {...props}
    >
      {icon && <img src={icon} alt="button_icon" className="button_icon"/>}
      <p className="button_text">
        {text}
      </p>
    </button>
  );
}

export default RoundedButton;