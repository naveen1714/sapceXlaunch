import React, { memo } from "react";

const Programs = memo(({ program }) => {
  return (
    <div className="card">
      <div className="image__wrapper">
        {" "}
        <img
          src={program && program.links && program.links.mission_patch_small}
          alt="Avatar"
        />
      </div>

      <div className="container">
        <div className="mission__heading">{`${program.mission_name} #${program.flight_number}`}</div>
        <div className="mission_wrapper">
          <div className="card__text">Mission Ids:</div>
          <div className="list__wraper">
            {program.mission_id && program.mission_id.length > 0 && (
              <ul className="mission-id-list color-blue" id="mission-id-list">
                {program.mission_id.map((id, index) => (
                  <li key={index}>{id}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="card__text">
          Launch Year: <span>{program.launch_year || "N/A"}</span>
        </div>
        <div className="card__text">
          <div className="successful__quote"> Successful Launch: </div>
          <div className="successful__quote__text">{program.launch_success ? "true" : "false"}</div>
        </div>
        <div className="card__text">
          <div className="successful__quote"> Successful Landing: </div>
          <div className="successful__quote__text">{program.launch_landing ? "true" : "false"}</div>
        </div>
      </div>
    </div>
  );
});

export default Programs;
