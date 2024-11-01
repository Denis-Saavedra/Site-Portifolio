import React from "react";

const skillsContent = [
  { skillClass: "p90", skillPercent: "90", skillName: "HTML" },
  { skillClass: "p75", skillPercent: "75", skillName: "JAVASCRIPT" },
  { skillClass: "p82", skillPercent: "82", skillName: "CSS" },
  { skillClass: "p66", skillPercent: "66", skillName: "REACT" },
  { skillClass: "p76", skillPercent: "76", skillName: "JAVA" },
  { skillClass: "p90", skillPercent: "90", skillName: "DELPHI" },
  { skillClass: "p97", skillPercent: "97", skillName: "C" },
  { skillClass: "p95", skillPercent: "95", skillName: "PYTHON" },
  { skillClass: "p99", skillPercent: "99", skillName: "PHOTOSHOP" },
  { skillClass: "p92", skillPercent: "92", skillName: "ILLUSTRATOR" },
  { skillClass: "p69", skillPercent: "69", skillName: "PREMIERE" },
  { skillClass: "p86", skillPercent: "86", skillName: "CorelDRAW" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
