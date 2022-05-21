import React from 'react';
import {useField} from "formik";
import Input from "../atoms/Input";

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
  ...props
}) => {

  const [field, meta, {setTouched}] = useField(name);

  const blurHandler = () => {
    setTouched(true);
  }

  return (
    <>
      <Input
        className= {className}
        error={!!meta.error && meta.touched}
        label={label}
        noLabel={noLabel}
        name={name}
        value={value || field.value}
        onChange={onChange}
        onBlur={blurHandler}
        {...props}
      />
    </>
  );
}

export default FormInput;