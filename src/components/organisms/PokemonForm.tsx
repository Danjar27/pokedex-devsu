import React from 'react';
import RoundedButton from "../atoms/RoundedButton";
import {Formik} from "formik";
import FormInput from "../molecules/FormInput";
import FormRangeInput from "../molecules/FormRangeInput";
import {schema} from "../../utils/schemas/PokemonFormSchema";
import {TableRowType} from "../../models/table.interfaces";
import FormImageInput from "../molecules/FormImageInput";

interface Props{
  values: TableRowType;
  isEdit?: boolean;
  onCancel: () => void;
  onSubmit: (values: TableRowType) => void;
  onEdit: (values: TableRowType) => void;
}

const PokemonForm: React.FC<Props> = ({
  values,
  onSubmit,
  isEdit,
  onEdit,
  onCancel,
}) => {

  const initialValues = {
    name: '',
    image: '',
    attack: 50,
    defense: 50,
  };

  const handleSubmit = (values: TableRowType, resetForm: () => void) => {
    isEdit
      ? onEdit(values)
      : onSubmit(values)
    onCancel();
    resetForm();
  };

  return (
    <Formik<TableRowType>
      enableReinitialize
      initialValues={isEdit ? values : initialValues}
      onSubmit={(values, {resetForm}) => handleSubmit(values, resetForm)}
      validationSchema={schema}
    >
      {({isValid, handleChange, submitForm}) => (
        <form className="Pokemon_form">
          <h3 className="Pokemon_form_title">Nuevo Pokemon</h3>

          <section className="Pokemon_form_fields">
            <div className="Pokemon_form_field">
              <FormInput
                className="Pokemon_form_input"
                name="name"
                label=" Nombre:"
                onChange={handleChange}
              />
              <FormImageInput
                placeholder="URL de la imagen"
                className="Pokemon_form_image_input"
                name="image"
                label="Imagen:"
                onChange={handleChange}
              />
            </div>
            <div className="Pokemon_form_field">
              <FormRangeInput
                className="Pokemon_form_input"
                name="attack"
                label="Ataque:"
                onChange={handleChange}
              />
              <FormRangeInput
                className="Pokemon_form_input"
                name="defense"
                label="Defensa:"
                onChange={handleChange}
              />
            </div>
          </section>

          <section className="Pokemon_form_buttons">
            <RoundedButton
              onClick={submitForm}
              disabled={!isValid}
              icon={"/images/save_icon.svg"}
              text="Guardar"
            />
            <RoundedButton
              onClick={onCancel}
              icon={"/images/cancel_icon.svg"}
              text="Cancelar"/>
          </section>

        </form>
      )}
    </Formik>
  );
}

export default PokemonForm;