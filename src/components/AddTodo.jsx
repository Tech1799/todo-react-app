import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";

const AddTodo = ({addTodo}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank.");
    } else {
			addTodo(title, desc);
			setTitle("");
			setDesc("");
		}
  };
  return (
    <div className="add-todo my-12 w-fit">
      <form onSubmit={submit} className="bg-gray-200 rounded-md px-10 py-6">
        <div className="text-center font-black text-2xl mb-3">
          Add a new Todo:
        </div>
				{/* {alertMessage} */}
        <div className="form-title">
          <label className="label" htmlFor="title">
            <span className="label-text font-semibold">Todo Title</span>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
						id="title"
            placeholder="Title"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-desc">
          <label className="label mt-6" htmlFor="desc">
            <span className="label-text font-semibold">Todo Description</span>
          </label>
          <textarea
            type="text"
						rows="4"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
						id="desc"
            placeholder="Description"
            className="textarea textarea-bordered"
          />
        </div>

        <button type="submit" className="btn gap-2 mt-6">
          <PlusIcon className="h-6 w-6" />
          Add Todo
        </button>
      </form>
    </div>
  );
};

export { AddTodo };
