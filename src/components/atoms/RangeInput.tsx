import React from 'react';

interface Props extends React.HTMLProps<HTMLInputElement> {
  name: string;
  label?: string;
  noLabel?: boolean;
  className?: string;
  onChange?: (e: any) => void;
  error?: boolean;
}

const RangeInput: React.FC<Props> = ({
  name,
  label,
  value,
  className,
  noLabel,
  error,
  min=0,
  max=100,
  ...props
}) => {


  return (
    <div className ={className || "FormInput_container"}>
      {!noLabel &&
      <div className="center">
        <label htmlFor={name} className="FormInput_label">{label}</label>
        <p style={{color: "#ccc", marginLeft: 10, width: 20}}>{value}</p>
      </div>
      }
      <p>{min}</p>
      <input
        className={error ? "FormInputError" : "FormInput"}
        type="range"
        name={name}
        value={value}
        {...props}
      />
      <p>{max}</p>
    </div>
  );
}

export default RangeInput;