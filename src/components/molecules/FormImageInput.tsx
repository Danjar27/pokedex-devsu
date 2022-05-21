import React from 'react';
import {useField} from "formik";
import ImageInput from "../atoms/ImageInput";

interface Props extends React.HTMLProps<HTMLInputElement> {
  name: string;
  label?: string;
  noLabel?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormImageInput: React.FC<Props> = ({
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
    <ImageInput
      className={className}
      error={!!meta.error && meta.touched}
      label={label}
      noLabel={noLabel}
      name={name}
      value={value || field.value}
      onChange={onChange}
      onBlur={blurHandler}
      {...props}
    />
  );
}

export default FormImageInput;