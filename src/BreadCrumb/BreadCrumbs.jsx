import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="flex items-center capitalize space-x-1 text-xs text-black">
      <Link to="/" className=" hover:text-gray-700">
        Home
      </Link>
      {pathnames.map((part, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return (
          <span key={index}>
            <span> {">"} </span>
            <Link
              to={routeTo}
              className={
                isLast
                  ? "font-medium text-gray-500"
                  : "text-gray-500 hover:text-gray-700"
              }
            >
              {part}
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
