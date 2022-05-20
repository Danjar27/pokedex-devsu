import {render} from "@testing-library/react";
import '@testing-library/jest-dom';
import Actions from "../../../src/components/molecules/Actions";

describe('Actions Component', () => {

  const props = {
    onEditClick: jest.fn(),
    onDeleteClick: jest.fn(),
  }

  test('component should exist', () => {
    expect(render(<Actions {...props}/>)).toBeTruthy();
  });

  test('component should have a div container', () => {
    const {container} = render(<Actions {...props}/>);
    expect(container.querySelector('div')).toBeTruthy();
  });

  test('component should render two icon buttons', () => {
    const {container} = render(<Actions {...props}/>);
    expect(container.querySelectorAll('button').length).toBe(2);
  });

});
