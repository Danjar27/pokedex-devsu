import {render} from "@testing-library/react";
import '@testing-library/jest-dom';
import FormInput from "../../../src/components/atoms/FormInput";

describe('FormInput Component', () => {

  const props = {
    name: 'test',
    label: 'test',
  }

  test('component should exist', () => {
    expect(render(<FormInput {...props}/>)).toBeTruthy();
  });

  test('component should have a label', () => {
    const { getByText } = render(<FormInput {...props} label="test" />);
    expect(getByText('test')).toBeTruthy();
  });

  test('component should have an input', () => {
    const { getByRole } = render(<FormInput {...props} />);
    expect(getByRole('textbox')).toBeTruthy();
  });

  test('label must be optional', () => {
    const { queryByText } = render(<FormInput noLabel {...props} />);
    expect(queryByText('test')).toBeFalsy();
  });

});