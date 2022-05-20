import {getByRole, render} from "@testing-library/react";
import '@testing-library/jest-dom';
import SearchInput from "../../../src/components/organisms/SearchInput";

describe('SearchInput Component', () => {

  const props = {
    onSearch: jest.fn()
  }

  test('should exist', () => {
    expect(render(<SearchInput {...props}/>)).toBeTruthy();
  });

  test('should have a input', () => {
    const {getByRole} = render(<SearchInput {...props}/>);
    expect(getByRole('textbox')).toBeTruthy();
  });

});
