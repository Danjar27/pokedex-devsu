import {render} from "@testing-library/react";
import '@testing-library/jest-dom';
import FormInput from "../../../src/components/molecules/FormInput";
import {Formik} from "formik";

describe('Formik image input Component', () => {

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
      <FormInput {...props}/>
    </Formik>

  test('component should exist', () => {
    expect(render(wrappedComponent)).toBeTruthy();
  });

  test('component should raise an error if is not wrapped inside Formik tag', () => {
    expect(() => render(<FormInput {...props}/>)).toThrow();
  });
});