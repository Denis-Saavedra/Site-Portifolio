import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-instagram",
    link: "https://www.instagram.com/",
  },
  { 
    iconName: "fa fa-linkedin", 
    link: "https://twitter.com/", 
  },
  {
    iconName: "fa fa-github",
    link: "https://www.youtube.com/",
  },
  { 
    iconName: "fa fa-whatsapp", 
    link: "https://dribbble.com/", 
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
