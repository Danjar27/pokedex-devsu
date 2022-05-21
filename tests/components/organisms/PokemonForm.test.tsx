import {render} from "@testing-library/react";
import '@testing-library/jest-dom';
import PokemonForm from "../../../src/components/organisms/PokemonForm";
import {TableRowType} from "../../../src/models/table.interfaces";

const props = {
  values: {} as TableRowType,
  onCancel: jest.fn(),
  onSubmit: jest.fn(),
  onEdit: jest.fn()
}

describe('PokemonForm', () => {
  test('should render correctly', () => {
    const component = render(<PokemonForm {...props}/>);
    expect(component).toBeTruthy();
  });

  test('should contain a form', () => {
    const component = render(<PokemonForm {...props}/>);
    expect(component.container.querySelector('form')).toBeTruthy();
  });

  test('should contain 4 input fields', () => {
    const component = render(<PokemonForm {...props}/>);
    expect(component.container.querySelectorAll('input').length).toBe(4);
  });

  test('should contain two buttons', () => {
    const component = render(<PokemonForm {...props}/>);
    expect(component.container.querySelectorAll('button').length).toBe(2);
  });
})