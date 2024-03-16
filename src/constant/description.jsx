import clientServer from "../assets/clientServer.png";
import monoArchi from "../assets/monoArchi.png";
import microArchitect from "../assets/microArchitect.png";
import serverless from "../assets/serverless.webp";
import spa from "../assets/spa.png";
import pwa from "../assets/PWA.png";

export const clientPoints = {
  data: [
    {
      title: "Communication",
      desc: "La communication se fait entre le client et le server via des protocoles de communication, généralement via une api Rest ou Graphql",
    },
    {
      title: "Centralisation des resources",
      desc: "Le serveur contient les données et la logique de l'application. Cela permet de facilement connecté différents clients au meme serveur et de s'assurer de la coherence (site web, application mobile,…)",
    },
    {
      title: "Scalable",
      desc: "Les deux composants sont facilement scalable horizontalement en dupliquant indépendamment le client et le server.",
    },
    {
      title: "Facilité de développement",
      desc: "Permet à des équipes de taille moyenne de travailler indépendamment sur le serveur et le client.",
    },
  ],
  img: clientServer,
};

export const monoPoints = {
  data: [
    {
      title: "Simplicité",
      desc: "Un seul code a maintenir et à déployer.",
    },
    {
      title: "Rapidité",
      desc: "On développe a la fois le backend, la bdd et la vue en meme temps, et ces composants sont tous lié. ce qui permet de plus rapidement developper.",
    },
    {
      title: "Maintenabilité",
      desc: "On s'assure par exemple que la modification d'un modele de donnée est bien géré par le front.",
    },
    {
      title: "Scalabilité",
      desc: "Il est plus difficile de scale ce type d'application car le client et serveur sont lié. Par exemple, creer une application mobile demanderait de créer une interface de communication, ce qui nous amène a une architecture client/serveur.",
    },
  ],
  img: monoArchi,
};

export const microPoints = {
  data: [
    {
      title: "Indépendance",
      desc: "Développement et déploiement de briques indépendante, qui communique entre elle via un protocole défini (http, tcp, queuing,…). Cela permet aux équipes nombreuses de travailler en parallèle sur les différentes fonctionnalités.",
    },
    {
      title: "Modularité",
      desc: "L'application est séparé en de nombreux composants, chacun ayant un but précis",
    },
    {
      title: "Isolation",
      desc: "Chaque service n'impact pas directement les autre services. Un service qui serait indisponible n'impacterai pas le reste de l'application.",
    },
    {
      title: "Multiples technologies",
      desc: "On peut donc travailler sur multiples langages, certains plus adaptés à certaines fonctionnalités.",
    },
  ],
  img: microArchitect,
};

export const serverlessPoints = {
  data: [
    {
      title: "Pas de gestion du serveur",
      desc: "Le serveur est géré par un cloud provider tel que aws, firebase, back4app.",
    },
    {
      title: "Rapidité",
      desc: "Inclus généralement une base de donnée ainsi que des méthodes permettant d'interagir avec cette base, ce qui permet de se focaliser sur le développement front.",
    },
    {
      title: "Peu couteux(au debut) et scalable",
      desc: "On paie généralement à l'utilisation de la resource, ce qui permet d'avoir des applications tres peu couteuse et qui scale automatiquement en fonction de la demande.",
    },
    {
      title: "Modulable",
      desc: "Il est facile d'intégrer des briques serverless au sein d'autres architectures. Par exemple on peut créer une fonction serverless qui compresse les images uploadé sur un serveur de stockage s3, basé sur des événements du bucket.",
    },
  ],
  img: serverless,
};

export const SpaPoints = {
  data: [
    {
      title: "Réactivité",
      desc: "les applications one page affiche dynamiquement la page en fonction des données renvoyé par le serveur, au sein de la meme page web. Cela évite les rechargement et rend l'experience utilisateur plus agréable.",
    },
    {
      title: "Simplicité",
      desc: "une grande partie de la logique est géré coté client, ainsi que l'affichage de la page qui est géré directement par javascript.",
    },
    {
      title: "Référencement",
      desc: "Le principale soucis des SPA est le référencement. Comme le contenue de la page est gérer dynamiquement a son chargement, les scrapers des moteur de recherche ne peuvent pas indexer son contenu.",
    },
  ],
  img: spa,
};

export const PwaPoints = {
  data: [
    {
      title: "Experience Utilisateur",
      desc: "l’utilisateur obtient une experience qui se rapproche de celle d’une application mobile, tout en gardant le meme code que le site web.",
    },
    {
      title: "Connectivité",
      desc: "Les PWA ajoute la possibilité de faire fonctionner le site meme lorsque le réseau est faible ou inexistant.",
    },
    {
      title: "Simplicité",
      desc: "Il est tres simple de transformer notre site web classique en une PWA, et nous n’avons pas de contrainte de publication comme pour des apps native.",
    },
  ],
  img: pwa,
};
