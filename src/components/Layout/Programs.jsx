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
        <div className="card__text">
          Launch Year: <span>{program.launch_year || "N/A"}</span>
        </div>
        <div className="card__text">
          Successful Launch:{" "}
          <span>{program.launch_success ? "true" : "false"}</span>
        </div>
        <div className="card__text">
          Successful Landing:{" "}
          <span>{program.launch_landing ? "true" : "false"}</span>
        </div>
      </div>
    </div>
  );
});

export default Programs;
