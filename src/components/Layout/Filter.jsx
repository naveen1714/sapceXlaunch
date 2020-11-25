import React, { memo, useState } from "react";
import Router, { withRouter } from "next/router";
import FilterYear from "./FilterYear";

const Filter = memo((props) => {
  const [years, setYears] = useState([
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ]);
  const [selectedYear, setSelectedYear] = useState(
    props.router.query && props.router.query.launch_year
  );
  const [launchSucess, setLaunchSuccess] = useState(
    props.router.query && props.router.query.launch_success
  );
  const [landSuccess, setLandSuccess] = useState(
    props.router.query && props.router.query.land_success
  );

  const handleClick = (value, type) => {
    const {
      router: { query },
    } = props;
    if (type == "year") {
      setSelectedYear(value);
      Router.push({
        pathname: "/programs",
        query: { ...query, launch_year: value },
      });
    }
    if (type == "launchSuccess") {
      setLaunchSuccess(value);
      Router.push({
        pathname: "/programs",
        query: { ...query, launch_success: value },
      });
    }
    if (type == "landSuccess") {
      setLandSuccess(value);
      Router.push({
        pathname: "/programs",
        query: { ...query, land_success: value },
      });
    }
  };
  return (
    <div className="left__section">
      <div className="filter">Filters</div>
      <div className="year__filter">
        <div className="filter__name">
          Launch Year<div className="line"></div>
        </div>
        {years && years.length
          ? years.map((year, index) => (
              <FilterYear
                selectedYear={selectedYear}
                key={index}
                handleClick={handleClick}
                year={year}
              />
            ))
          : null}
      </div>
      <div className="year__filter">
        <div className="filter__name">
          Successful Launch<div className="line"></div>
        </div>
        <div
          onClick={() => handleClick(true, "launchSuccess")}
          className={`year ${launchSucess == true || launchSucess == "true" ? "active" : ""}`}
        >
          True
        </div>
        <div
          onClick={() => handleClick(false, "launchSuccess")}
          className={`year ${launchSucess == false || launchSucess == "false" ? "active" : ""}`}
        >
          False
        </div>
      </div>
      <div className="year__filter">
        <div className="filter__name">
          Successful Landing<div className="line"></div>
        </div>
        <div
          onClick={() => handleClick(true, "landSuccess")}
          className={`year ${landSuccess == true || landSuccess == "true" ? "active" : ""}`}
        >
          True
        </div>
        <div
          onClick={() => handleClick(true, "landSuccess")}
          className={`year ${landSuccess == false || landSuccess == "false" ? "active" : ""}`}
        >
          False
        </div>
      </div>
    </div>
  );
});

export default withRouter(Filter);
