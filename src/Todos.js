import React, { useState, useEffect, useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import List from "./List";
import { AppContext } from "./context";

const getLocalList = () => {
  let local_list = localStorage.getItem("list");
  if (local_list) return JSON.parse(local_list);
  else return [];
};

function Todos() {
  const { login } = useContext(AppContext);

  const [title, setTitle] = useState("");
  const [list, setList] = useState(getLocalList());

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleSubmit = () => {
    const newTodo = { id: new Date().getTime().toString(), done: false, title };
    setTitle("");

    setList([...list, newTodo]);
  };

  // check item
  const checkItem = (e) => {};

  // delete button
  const deleteItem = (key) => {
    setList(list.filter((item) => item.id !== key));
  };

  // edit button
  const editItem = (id, text) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return { ...item, title: text };
        }
        return item;
      })
    );
  };

  return (
    <section className="container pt-2 mt-5" style={{ width: "40%" }}>
      <h2 className="text-center">Todo list</h2>
      <hr />

      <div className="form-inline mb-3">
        <input
          className="form-control mr-3 col-10"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button
          type="button"
          className="btn btn-secondary"
          onClick={title != "" ? handleSubmit : undefined}
        >
          Submit
        </button>
      </div>
      <hr />
      <div className="card">
        <List items={list} handleDelete={deleteItem} editItem={editItem} />
      </div>
    </section>
  );
}

export default Todos;
