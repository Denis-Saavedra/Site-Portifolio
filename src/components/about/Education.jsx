import React from "react";

const educationContent = [
  {
    year: "2013",
    degree: "START 5.0",
    institute: "SAGA",
    details: `Completei o curso START 5.0, onde adquiri habilidades em ilustração
        vetorial, pintura digital, composição de imagens e efeitos visuais. Aprendi
        também edição e motion graphics para vídeos, além de desenvolver projetos
        interativos em 3D para realidades virtual e aumentada, o que ampliou minha
        capacidade de criar experiências visuais inovadoras.`,
  },
  {
    year: "2016",
    degree: "Inglês Nível B2",
    institute: "IINTEC",
    details: `Concluí o curso de Inglês no nível B2, onde desenvolvi habilidades de
        compreensão e comunicação. Aprendi a ler e interpretar textos, participar
        de conversas e realizar apresentações de forma clara. A formação me permitiu
        avaliar e aplicar vocabulário e estruturas adequadas, adaptadas a diferentes
        contextos e interlocutores.`,
  },
  {
    year: "2022",
    degree: "Análise e Desenvolvimento de Sistemas",
    institute: "Instituto Federal de São Paulo",
    details: `Graduei em Análise e Desenvolvimento de Sistemas, onde aprendi a avaliar,
        selecionar e utilizar metodologias, tecnologias e ferramentas da engenharia de
        software. Minha formação incluiu linguagens de programação e bancos de dados,
        sempre considerando a importância de garantir uma formação profissional
        tecnológica sólida e atualizada.`,
  },  
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-graduation-cap"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
