import React, {useEffect, useState} from 'react';
import FormInput from "../atoms/FormInput";
import useDebounce from "../../hooks/useDebounce";

interface Props {
  onSearch: (name: string) => void
}

const SearchInput:React.FC<Props> = ({
  onSearch
}) => {

  const [value, setValue] = useState('');
  const lastValue = useDebounce<string>(value)

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    onSearch(lastValue)
  }, [lastValue])

  return <FormInput noLabel name="searchInput" onChange={handleChange} value={value}/>

}

export default SearchInput;