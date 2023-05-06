import React from "react";
import "./searchList.css";
export const SearchList = ({ events, isLoading }) => {
  return (
    (events.length > 0 || isLoading) && (
      <div className="resultBox">
        <ul className="listGroup">
          {isLoading ? (
            <li key={"loading"} className="listGroupItem">
              <p>Cargando ...</p>
            </li>
          ) : null}
          {events.length > 0
            ? events.map((ev) => (
                <li key={ev?.id} className="listGroupItem">
                  <img
                    className="listGroupItemImage"
                    src={ev?.image}
                    alt={ev?.title}
                  />
                  <div className="listGroupItemInfo">
                    <h1>{ev?.title}</h1>
                    <h2>{ev?.subtitle}</h2>
                  </div>
                </li>
              ))
            : null}
        </ul>
      </div>
    )
  );
};
