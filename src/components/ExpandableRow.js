import React from "react";
import { useDispatch } from "react-redux";
import { toggleRow } from "../features/auth/AuthSlice";

const ExpandableRow = ({ row }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3 onClick={() => dispatch(toggleRow(row.id))}>{row.title}</h3>
      {row.expanded && <p>{row.content}</p>}
    </div>
  );
};

export default ExpandableRow;
