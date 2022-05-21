import {render} from "@testing-library/react";
import '@testing-library/jest-dom';
import FormRangeInput from "../../../src/components/molecules/FormRangeInput";
import {Formik} from "formik";

describe('Formik range input Component', () => {

  const initialValues = {
    test: ''
  };

  const onSubmit = jest.fn();

  const props = {
    name: "test",
    label: "test",
  }

  const wrappedComponent =
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <FormRangeInput {...props}/>
    </Formik>

  test('component should exist', () => {
    expect(render(wrappedComponent)).toBeTruthy();
  });

  test('component must render a range input', () => {
    const {container} = render(wrappedComponent);
    expect(container.querySelector('input')).toHaveAttribute('type', 'range');
  });

});