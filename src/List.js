import React, { useState } from "react";
import FlipMove from "react-flip-move";
import ListItem from "./ListItem";

function List(props) {
  const { items, handleDelete, editItem } = props;

  const [title, setTitle] = useState("");
  const [edit_id, setEditId] = useState("");

  return (
    <ol className="list-group list-group-flush">
      {items.map((item, i) => {
        return (
          <ListItem
            key={item.id}
            item={item}
            i={i}
            handleDelete={handleDelete}
            editItem={editItem}
          />
        );
      })}
    </ol>
  );
}

export default List;
