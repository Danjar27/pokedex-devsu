import {render} from "@testing-library/react";
import '@testing-library/jest-dom';
import Table from "../../../src/components/organisms/Table";

describe('Table Component', () => {

  const props = {
    name: 'test',
    label: 'test',
  }

  test('component should exist', () => {
    expect(render(<Table {...props}/>)).toBeTruthy();
  });

  test('component class must be "Table"', () => {
    const {container} = render(<Table {...props}/>);
    const {firstElementChild} = container;
    expect(firstElementChild?.className).toBe('FormTable');
  });
});
