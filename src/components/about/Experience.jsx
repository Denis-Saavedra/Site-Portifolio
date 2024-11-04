import React from "react";

const experienceContent = [
  {
    year: "2013 - 2019",
    position: "Designer",
    compnayName: "Comunnica",
    details: `Atuei como designer em uma equipe criativa, onde fui responsável por
        desenvolver layouts e identidades visuais para diversos projetos. Minha função
        incluía a criação de logotipos, materiais de marketing e interfaces de usuário
        para aplicativos web e mobile. Colaborei estreitamente com desenvolvedores e
        clientes para garantir que as soluções visuais atendessem às necessidades e
        expectativas. Além disso, participei de reuniões de brainstorming e
        apresentações de projetos, contribuindo para o processo criativo e estratégico.`,
  },
  {
    year: "2020 - 2023",
    position: "Arte Finalista",
    compnayName: "Criarte",
    details: `Durante meu tempo como arte finalista, trabalhei na preparação de artes
        para impressão e produção digital. Fui responsável por garantir que todos os
        materiais gráficos estivessem prontos para a impressão, incluindo revisão de
        cores, tipografia e elementos visuais. Colaborei com designers e equipes de
        produção para assegurar que o resultado final estivesse em conformidade com
        os padrões de qualidade da empresa. Também participei de reuniões com clientes
        para discutir suas necessidades e oferecer soluções criativas.`,
  },
  {
    year: "2024 - Present",
    position: "Desenvolvedor de Sistemas",
    compnayName: "TRS Sistemas",
    details: `Atualmente, trabalho como desenvolvedor de sistemas, focando no
        desenvolvimento de aplicações e soluções personalizadas para clientes. Minha
        função envolve a análise de requisitos, design de sistemas e programação em
        várias linguagens. Colaboro com uma equipe ágil para implementar novas
        funcionalidades e otimizar o desempenho das aplicações. Além disso, participo
        de testes e manutenção de sistemas existentes, garantindo que todas as soluções
        atendam aos mais altos padrões de qualidade e segurança.`,
  },
  
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
