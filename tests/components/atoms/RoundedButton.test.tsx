import {getByRole, render} from "@testing-library/react";
import '@testing-library/jest-dom';
import RoundedButton from "../../../src/components/atoms/RoundedButton";

describe('RoundedButton Component', () => {

  const props = {
    text: 'test',
    icon: '/images/edit_icon.svg'
  };

  test('should render RoundedButton component', () => {
    const button = render(<RoundedButton {...props}/>);
    expect(button).toBeTruthy();
  });

  test('should render RoundedButton component with text', () => {

    const {getByText} = render(<RoundedButton {...props}/>);
    const text = getByText(props.text);
    expect(text).toBeTruthy();
  });

  test('should render RoundedButton component with image', () => {
    const {getByRole} = render(<RoundedButton {...props}/>);
    const image = getByRole("img");
    expect(image).toBeTruthy();
  });
})

