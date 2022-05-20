import {getByRole, render} from "@testing-library/react";
import '@testing-library/jest-dom';
import IconButton from "../../../src/components/atoms/IconButton";

describe('IconButton Component', () => {

  const props = {
    text: 'test',
    icon: '/images/edit_icon.svg',
    onClick: jest.fn()
  };

  test('should render IconButton component', () => {
    const button = render(<IconButton {...props}/>);
    expect(button).toBeTruthy();
  });

  test('should render IconButton component with onClick prop', () => {
    const {getByRole} = render(<IconButton {...props}/>);
    const button = getByRole('button');
    button.click();
    expect(props.onClick).toHaveBeenCalled();
  });
})

