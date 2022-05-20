import React from "react";
import {TableRowType} from "../../models/table.interfaces";
import Actions from "./Actions";

interface Props {
  elements: Array<Partial<TableRowType>>;
  onEdit : (id: number|string|undefined) => void;
  onDelete : (id: number|string|undefined) => void;
}

const FormTableRow = ({
  elements,
  onEdit,
  onDelete
}: Props) => {
  return(
    <>
      {
        elements?.map(
          (element) => (
            <>
              <div>{element.name}</div>
              <div>
                <img style={{width: "40%"}} src={element.image} alt="pokemon"/>
              </div>
              <div>{element.attack}</div>
              <div>{element.defense}</div>
              <Actions
                onEditClick={() => onEdit(element.id)}
                onDeleteClick={() => onDelete(element.id)}
              />
            </>
          ))
      }
    </>
  )
}

export default FormTableRow;