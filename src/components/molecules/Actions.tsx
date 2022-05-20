import React from 'react';
import IconButton from "../atoms/IconButton";

interface Props {
  onEditClick: () => void
  onDeleteClick: () => void
}

const Actions: React.FC<Props> = ({
  onDeleteClick,
  onEditClick,
}) => (
  <div className="center" style={{gap: 45}}>
    <IconButton icon={"/images/edit_icon.svg"} onClick={onEditClick} />
    <IconButton icon={"/images/delete_icon.svg"} onClick={onDeleteClick} />
  </div>
)

export default Actions;