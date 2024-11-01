import React from "react";

// Função para calcular a idade com base na data de nascimento
const calculateAge = (birthDate) => {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDifference = today.getMonth() - birthDateObj.getMonth();
  
  // Ajusta a idade se o aniversário ainda não foi este ano
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
    age--;
  }
  return age;
};

// Define a data de nascimento aqui
const birthDate = "2003-09-16";

const personalInfoContent = [
  { meta: "Nome", metaInfo: "Denis" },
  { meta: "Sobrenome", metaInfo: "Saavedra" },
  { meta: "Idade", metaInfo: `${calculateAge(birthDate)} Anos` },
  { meta: "Nacionalidade", metaInfo: "Brasileiro" },
  { meta: "Freelance", metaInfo: "Disponível" },
  { meta: "Address", metaInfo: "Tunis" },
  { meta: "Telefone", metaInfo: "+55 (11) 96571-8805" },
  { meta: "Idiomas", metaInfo: "Português, Inglês e Espanhol" },
  { meta: "Email", metaInfo: "denissaavedrafernandes@gmail.com" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
