import React, { useState } from "react";

function ListItem({ item, i, handleDelete, editItem }) {
  const [title, setTitle] = useState(item.title);
  const [item_id, setItemId] = useState(item.id);
  const [edit, setEdit] = useState("");

  const handleEdit = () => {
    setEdit(item_id);
  };

  const updateItem = () => {
    editItem(item_id, title);
    setEdit("");
  };

  return (
    <li key={item.id} className="list-group-item m-0">
      <div className="row">
        <label className="ml-1">{i + 1 + ")"} </label>
        {edit != "" ? (
          <input
            className="form-control col-6 mr-3 "
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        ) : (
          <label className="col-7">{item.title}</label>
        )}
        <button
          id={"edit_" + item.id}
          type="button"
          className="col-1 btn btn-primary btn-sm"
          onClick={edit != "" ? updateItem : handleEdit}
        >
          {edit != "" ? "Update" : "Edit"}
        </button>
        &nbsp;
        <button
          type="button"
          className="col-2 btn btn-danger btn-sm "
          onClick={() => handleDelete(item.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default ListItem;
