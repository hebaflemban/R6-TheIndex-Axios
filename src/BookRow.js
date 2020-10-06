import React from "react";

const BookRow = props => {
  let authorsList =[]
  const book = props.book;
  const authorName = props.authorName;
  const authorNames = props.book.authors.map(author => authorsList.push(author.name));

  return (
    <tr>
      <td>{book.title}</td>
      <td>{authorsList}</td>
      <td>
        <button className="btn" style={{ backgroundColor: book.color }} />
      </td>
    </tr>
  );
};

export default BookRow;
