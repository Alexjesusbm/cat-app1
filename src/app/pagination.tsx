import React from "react";

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination = ({ limit, total, offset, setOffset }) => {
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  return (
    <ul className="flex justify-center gap-2 mt-4">
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <li key={page}>
            <button
              onClick={() => setOffset((page - 1) * limit)}
              className={`px-3 py-1 border rounded-md transition-colors ${
                current === page
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-blue-600 border-blue-300 hover:bg-blue-100"
              }`}
            >
              {page}
            </button>
          </li>
        ))}
    </ul>
  );
};

export default Pagination;
