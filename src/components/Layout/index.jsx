import React, { memo } from "react";
import Programs from "./programs";
import Filter from "./Filter";

const index = memo(({ programs }) => {
  return (
    <div className="main__container">
      <div className="inner__container">
        <div className="heading">SpaceX Launch Programs</div>
        <Filter />
        <div className="right__section">
          {programs && programs.length
            ? programs.map((program) => (
                <Programs program={program} key={program.flight_number} />
              ))
            : null}
        </div>
        <footer className="footer-wrapper text-center">
          <span className="footer-title">Developed By:</span>
          <span className="footer-value">Naveen</span>
        </footer>
      </div>
    </div>
  );
});

export default index;
