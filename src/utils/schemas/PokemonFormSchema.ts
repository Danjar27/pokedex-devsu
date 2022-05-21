import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string().required(),
  image: Yup.string().required(),
  attack: Yup.number().required(),
  defense: Yup.number().required(),
})