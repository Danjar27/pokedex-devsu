import React from 'react';

interface Props extends React.HTMLProps<HTMLInputElement> {
  name: string;
  label?: string;
  noLabel?: boolean;
  className?: string;
  error ?: boolean;
}

const ImageInput: React.FC<Props> = ({
  name,
  label,
  value,
  className,
  noLabel,
  error,
  ...props
}) => {

  return (
    <div className={className || "FormInput_container"}>
      {!noLabel && <label htmlFor={name} className="FormInput_label">{label}</label>}
      <input
        value={value}
        className={error ? "FormInputError" : "FormInput"}
        name={name}
        {...props}
      />
      <img
        src={value as string}
        alt="pokemon preview"
        style={{height: "3rem"}}
        onError={(e) => {
          (e.target as HTMLImageElement).src = "/images/placeholder_image.svg";
        }}
      />
    </div>
  );
}

export default ImageInput;