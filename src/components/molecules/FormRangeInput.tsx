import React from 'react';
import {useField} from "formik";
import RangeInput from "../atoms/RangeInput";

interface Props extends React.HTMLProps<HTMLInputElement> {
  name: string;
  label?: string;
  noLabel?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<Props> = ({
  name,
  label,
  noLabel,
  value,
  className,
  onChange,
  min = 0,
  max = 100,
  ...props
}) => {

  const [field, meta , {setTouched}] = useField(name);

  const blurHandler = () => {
    setTouched(true);
  }

  return (
    <RangeInput
      className={className}
      label={label}
      noLabel={noLabel}
      name={name}
      value={value || field.value}
      onChange={onChange}
      onBlur={blurHandler}
      min={0}
      max={100}
      error={meta.touched && !!meta.error}
      {...props}
    />
  );
}

export default FormInput;