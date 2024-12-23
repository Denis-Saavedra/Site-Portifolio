import React from "react";

const achievementsContent = [
  { title: "8", subTitle1: "anos de", subTitle2: "experiência" },
  { title: "60", subTitle1: "projetos", subTitle2: "completos" },
  { title: "40", subTitle1: "clientes", subTitle2: "felizes" },
  { title: "25", subTitle1: "soluções", subTitle2: "criativas" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
