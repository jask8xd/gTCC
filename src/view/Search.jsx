import React from "react";
import { useSearch } from "./useSearch";

import { SearchInput, SearchList } from "../components";
import gameTime from "../assets/gameTime.png";
import "./search.css";

export const Search = () => {
  const { events, handleOnChange, isLoading } = useSearch();
  return (
    <div className="searchContainer">
      <img className="gameTimeLogo" src={gameTime} alt="gameTimeLogo" />
      <SearchInput onChange={handleOnChange} />
      <SearchList events={events} isLoading={isLoading} />
    </div>
  );
};
