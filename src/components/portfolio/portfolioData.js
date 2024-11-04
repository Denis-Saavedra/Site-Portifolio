import Image1 from "../../assets/img/portfolio/project-1.jpg";
import Image2 from "../../assets/img/portfolio/project-2.jpg";
import Image3 from "../../assets/img/portfolio/project-3.png";
import Image4 from "../../assets/img/portfolio/project-4.png";

const PortfolioData = [
  {
    id: 1,
    type: "FaMa's Embalagens",
    image: Image1,
    tag: ["site", "logo"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "WebSite FaMa's Embalagens",
        client: "FaMa's Embalagens",
        language: "HTML, CSS, Javascript",
        preview: "famasembalagens.com.br",
        link: "https://famasembalagens.com.br/",
      },
    ],
  },
  {
    id: 2,
    type: "Delícias Nordestinas",
    image: Image2,
    tag: ["logo"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Logo Casa do Norte",
        client: "Casa do Norte",
        language: "Adobe Illustrator",
        preview: "www.videohive.net",
        link: "https://www.videohive.net",
      },
    ],
  },
  {
    id: 3,
    type: "M7 Brindes",
    image: Image3,
    tag: ["logo", "aplicacao"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Logotipo M7",
        client: "M7 Brindes",
        language: " Adobe Illustrator, Photoshop",
        preview: "www.envato.com",
        link: "https://www.envato.com",
      },
    ],
  },
  {
    id: 4,
    type: "EmuHub",
    image: Image4,
    tag: ["projeto"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "TCC",
        client: "IFSP",
        language: "Delphi, React, PHP, Python",
        preview: "www.github.com",
        link: "https://github.com/Denis-Saavedra/EmuHub-Desktop",
      },
    ],
  },
  
];

export default PortfolioData;
