import React from "react";

const FilterYear = ({ year, handleClick, selectedYear }) => {
  return (
    <div
      onClick={() => handleClick(year, "year")}
      className={`year ${selectedYear == year ? "active" : ""}`}
    >
      {year}
    </div>
  );
};

export default FilterYear;
