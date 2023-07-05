import React from "react";
import "../../styles/pagination.css";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="d-flex align-items-center justify-content-center gap-3 mt-5">
      {pages.length !== 1
        ? pages.map((page, index) => (
            <button
              className="btn__perpages"
              onClick={() => setCurrentPage(page)}
              key={index}
            >
              {page}
            </button>
          ))
        : ""}
    </div>
  );
};

export default Pagination;
