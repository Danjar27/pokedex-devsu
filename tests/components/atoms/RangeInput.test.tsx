import {render} from "@testing-library/react";
import '@testing-library/jest-dom';
import RangeInput from "../../../src/components/atoms/RangeInput";

describe('Range Input Component', () => {

  const props = {
    name: 'test',
    label: 'test',
  }

  test('component should exist', () => {
    expect(render(<RangeInput {...props}/>)).toBeTruthy();
  });

  test('component should render an input with "FormInput" className', () => {
    const {container} = render(<RangeInput {...props}/>);
    expect(container.querySelector('input')).toHaveClass('FormInput');
  });

  test('component must render a range input', () => {
    const {container} = render(<RangeInput {...props}/>);
    expect(container.querySelector('input')).toHaveAttribute('type', 'range');
  });

});