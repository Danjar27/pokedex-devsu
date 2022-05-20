import React from 'react';

interface Props extends React.HTMLProps<HTMLInputElement> {
  name: string;
  label: string;
  noLabel?: boolean;
  className?: string;
}

const FormInput: React.FC<Props> = ({
  name,
  label,
  value,
  className,
  noLabel,
  ...props
}) => {
  return (
    <div className ={className || "FormInput_container"}>
      {!noLabel && <label htmlFor={name} className="FormInput_label">{label}</label>}
      <input name={name} {...props} className="FormInput"/>
    </div>
  );
}

export default FormInput;