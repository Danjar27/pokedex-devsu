import {render} from "@testing-library/react";
import '@testing-library/jest-dom';
import FormImageInput from "../../../src/components/molecules/FormImageInput";
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
      <FormImageInput {...props}/>
    </Formik>

  test('component should exist', () => {
    expect(render(wrappedComponent)).toBeTruthy();
  });

  test('component should raise an error if is not wrapped inside Formik tag', () => {
    expect(() => render(<FormImageInput {...props}/>)).toThrow();
  });

  test('component should render an image get by role', () => {
    const {getByRole} = render(wrappedComponent);
    expect(getByRole('img')).toBeTruthy();
  });

});