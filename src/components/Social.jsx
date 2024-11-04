import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-instagram",
    link: "https://www.instagram.com/denis_saavedra_fernandes/",
  },
  { 
    iconName: "fa fa-linkedin", 
    link: "https://www.linkedin.com/in/denis-saavedra-38ba6521b/", 
  },
  {
    iconName: "fa fa-github",
    link: "https://github.com/Denis-Saavedra",
  },
  { 
    iconName: "fa fa-whatsapp", 
    link: "https://wa.me/5511965718805", 
  },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
