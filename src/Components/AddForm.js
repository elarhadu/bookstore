import React from 'react';

export default function AddForm() {
  return (
    <>
      <h2>Add A New Book</h2>
      <form>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Author" />
        <button type="submit">Add Book</button>
      </form>

    </>
  );
}
