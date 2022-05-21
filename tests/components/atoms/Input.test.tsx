import {render} from "@testing-library/react";
import '@testing-library/jest-dom';
import Input from "../../../src/components/atoms/Input";

describe('Input Component', () => {

  const props = {
    name: 'test',
    label: 'test',
  }

  test('component should exist', () => {
    expect(render(<Input {...props}/>)).toBeTruthy();
  });

  test('component should have a label', () => {
    const { getByText } = render(<Input {...props} label="test" />);
    expect(getByText('test')).toBeTruthy();
  });

  test('component should have an input', () => {
    const { getByRole } = render(<Input {...props} />);
    expect(getByRole('textbox')).toBeTruthy();
  });

  test('label must be optional', () => {
    const { queryByText } = render(<Input noLabel {...props} />);
    expect(queryByText('test')).toBeFalsy();
  });

});