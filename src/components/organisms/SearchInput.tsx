import React, {useEffect, useState} from 'react';
import Input from "../atoms/Input";
import useDebounce from "../../hooks/useDebounce";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch: (name: string) => void
}

const SearchInput:React.FC<Props> = ({
  onSearch,
  ...props
}) => {

  const [value, setValue] = useState('');
  const lastValue = useDebounce<string>(value)

  useEffect(() => {
    onSearch(lastValue)
  }, [lastValue])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return <Input noLabel name="searchInput" onChange={handleChange} value={value} {...props}/>

}

export default SearchInput;