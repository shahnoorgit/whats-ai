"use client";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

const Search = () => {
  const handleSearch = () => {};
  const [manufacturer, setmanufacturer] = useState("");
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setmanufacturer={setmanufacturer}
        />
      </div>
    </form>
  );
};

export default Search;
