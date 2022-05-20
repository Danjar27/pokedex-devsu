import React from 'react';

interface Props extends React.HTMLProps<HTMLTableElement> {

}
const FormTable: React.FC<Props> = ({
  children,
}) => {
  return (
    <section className="FormTable">
      <div className="bold">Nombre</div>
      <div className="bold">Imagen</div>
      <div className="bold">Ataque</div>
      <div className="bold">Defensa</div>
      <div className="bold">Acciones</div>
      {children}
    </section>
  );
}

export default FormTable;