import {render} from "@testing-library/react";
import '@testing-library/jest-dom';
import ImageInput from "../../../src/components/atoms/ImageInput";

describe('Image Input Component', () => {

  const props = {
    name: 'test',
    label: 'test',
  }

  test('component should exist', () => {
    expect(render(<ImageInput {...props}/>)).toBeTruthy();
  });

  test('component should have a label', () => {
    const {getByText} = render(<ImageInput {...props}/>);
    expect(getByText(props.label)).toBeTruthy();
  });

  test('component should render a text input', () => {
    const {getByRole} = render(<ImageInput {...props}/>);
    expect(getByRole('textbox')).toBeTruthy();
  });

  test('component should render an image', () => {
    const {getByRole} = render(<ImageInput {...props}/>);
    expect(getByRole('img')).toBeTruthy();
  });



});