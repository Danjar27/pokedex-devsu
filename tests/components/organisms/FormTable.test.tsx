import {render} from "@testing-library/react";
import '@testing-library/jest-dom';
import FormTable from "../../../src/components/organisms/FormTable";

describe('FormTable Component', () => {

  const props = {
    name: 'test',
    label: 'test',
  }

  test('component should exist', () => {
    expect(render(<FormTable {...props}/>)).toBeTruthy();
  });

  test('component class must be "FormTable"', () => {
    const {container} = render(<FormTable {...props}/>);
    const {firstElementChild} = container;
    expect(firstElementChild?.className).toBe('FormTable');
  });
});
