import React, {Fragment} from "react";
import {TableRowType} from "../../models/table.interfaces";
import Actions from "./Actions";

interface Props {
  elements: Array<Partial<TableRowType>>;
  onEdit: (id: string) => void;
  onDelete: (id: number | string) => void;
}

const TableRow = ({
  elements,
  onEdit,
  onDelete,
}: Props) => {


  const resultElements = elements.map((element) => (
    <Fragment key={element.id}>
      <div>{element.name}</div>
      <div>
        <img
          style={{width: "40%"}}
          src={element.image}
          alt="pokemon"
        />
      </div>
      <div>{element.attack}</div>
      <div>{element.defense}</div>
      <Actions
        onEditClick={() => onEdit(element.id as string)}
        onDeleteClick={() => onDelete(element.id as string)}
      />
    </Fragment>
  ))

  return (
    <>{resultElements}</>
  )
}

export default TableRow;