import battleshipImage from "../assets/battleshipProject.jpg";
import weatherImage from "../assets/weatherProject.jpg";
import cvImage from "../assets/cvProject.jpg";
import superchatImage from "../assets/superchatProject.jpg";
import inventoryImage from "../assets/inventoryProject.jpg";
import azureImage from "../assets/azureProject.jpg";
import portfolioImage from "../assets/portfolioProject.jpg";

const projectDetails = [
  {
    image: battleshipImage,
    url: "https://github.com/MiiaNyy/Battleships",
    favorite: true,
    text: {
      en: {
        title: "battleships",
        description:
          "Game created with React and Webpack. Classic battleships game where the user plays against AI. The whole game loop and players are created using JavaScript objects and classes. This was also my first touch using TDD."
      },
      fin: {
        title: "Battleships",
        description:
          "Reactin ja Webpackin avulla rakennettu klassinen laivanupotus peli, jossa pelaaja pelaa AI:tä vastaan. Projektin tavoitteena oli harjoitella JavaScript-objektien ja -classien käyttöä ja ottaa ensikosketus TDD (Test Driven Development) -käytäntöihin Jest:n avulla."
      }
    }
  },
  {
    image: portfolioImage,
    url: "https://github.com/MiiaNyy/portfolio",
    text: {
      en: {
        title: "Portfolio",
        description:
          "To help with my work search, I created this portfolio project. I build it using React, Typescript, Bootstrap, and CSS. I wanted the portfolio to be quite simple but full of details and animations. The animations are created using the react-animation-on-scroll package and English and finish translations are created using the i18next."
      },
      fin: {
        title: "Portfolio",
        description:
          "Työnhaun avuksi loin tämän portfolion  Reactin, Typescriptin, Bootstrapin ja CSS:n avulla. Halusin portfolion olevan melko yksinkertainen, mutta täynnä yksityiskohtia ja animaatioita. Osa animaatioista on luotu react-animation-on-scroll -paketin avulla  ja englanninkieliset ja suomalaiset käännökset on luotu i18nextillä."
      }
    }
  },
  {
    image: azureImage,
    url: "https://github.com/MiiaNyy/ramses-the-chat-bot",

    text: {
      en: {
        title: "Azure chat bot",
        description:
          "I created a chat bot using Microsoft Azure Bot Services. It is connected to QnA Maker Knowledge Base and Azures Language Understanding (LUIS). Bot can answer questions about company but it main purpose is to connect users to the inventory management."
      },
      fin: {
        title: "Azure virtuaalinen avustaja",
        description:
          "Microsoft Azure Bot Services -palveluja käyttäen loin virtuaalisen avustajan. Se osaa vastata mm. yritystä koskeviin kysymyksiin, mutta sen päätarkoitus on yhdistää käyttäjät inventaarion hallintaan.  Se on yhdistetty QnA Maker Knowledge Base -tietokantaan ja Azures Language Understandingiin (LUIS)."
      }
    }
  },
  {
    image: inventoryImage,
    url: "https://github.com/MiiaNyy/RSA-inventory",
    text: {
      en: {
        title: "Inventory manager",
        description:
          "Inventory application where I practiced MVC architecture using Node.js Express as backend and MongoDB as database. The app allows users to browse the entire inventory of the company or find specific items according to different categories; price, species, or size of the item. App is created from fully dynamic pages using Handlebars."
      },
      fin: {
        title: "inventaario sovellus",
        description:
          "Inventaario sovellus, jossa harjoittelin MVC-arkkitehtuuria. Rakensin sovelluksen käyttäen Node.js Expressiä backend puolella ja MongoDB:tä tietokantana. Sovelluksen avulla käyttäjät voivat selata yrityksen koko varastoa tai löytää tiettyjä kohteita eri luokkien mukaan. . Sovellus on luotu täysin dynaamisista sivuista Handlebars:n avulla"
      }
    }
  },
  {
    image: cvImage,
    url: "https://github.com/MiiaNyy/cv-maker",
    text: {
      en: {
        title: "cv Maker",
        description:
          "A deep dive into React and React Hooks. In the app, user can create their own CV by filling different form components. All information provided by the user is stored in local storage. If the user wants to later add new information or add new sections to the CV, they don't need to start from scratch."
      },
      fin: {
        title: "CV maker",
        description:
          "Syvä sukellus Reactiin ja React Hooksien käyttöön. Sovelluksessa käyttäjä voi rakentaa oman CV:n, täyttämällä erillaisia lomakkeita omilla tiedoillaan. Kaikki käyttäjän antamat tiedot tallennetaan selaimen local storageen. Jos käyttäjä haluaa myöhemmin listätä tai muokata antamiaan tietoja, hänen ei näin tarvitse aloittaa alusta."
      }
    }
  },
  {
    image: weatherImage,
    url: "https://github.com/MiiaNyy/weather-app",
    text: {
      en: {
        title: "weather forecast",
        description:
          "Using REST API from open weather map users can search current weather info and 5-day forecast for specific location.The goal of this project was to get more familiar with REST APIs and asynchronous javascript. I used the ES6 async/await and fetch() method to fetch resources asynchronously across the network and get responses from API."
      },
      fin: {
        title: "sään ennustaja",
        description:
          "Open weather map REST API käyttäen, sovelluksen käyttäjät voivat hakea tämänhetkisen sään ja viiden päivän sää ennusteen tietystä sijainnista. Projektin tavoitteena oli tutustua tarkemmin REST API ja asynkroniseen JavaScriptiin. Käytin ES6 async/await ja fetch() methodeja  resurssien noutamiseen asynkronisesti verkon yli ja vastausten saamiseksi API:lta."
      }
    }
  },
  {
    image: superchatImage,
    url: "https://github.com/MiiaNyy/superchat",
    text: {
      en: {
        title: "super chat",
        description:
          "Chat application build using Firebase, Firestore database and Firebase Storage services, Google authentication. In app users have to sign in to send and receive text and image messages to other online users."
      },
      fin: {
        title: "chatti appi",
        description:
          "Chat sovellus, mikä on rakennettu Firebasen avulla. Käytin projektissa Firestore tietokantaa, Firebase Storagea ja Googlen todennusta. Sovelluksessa käyttäjät kirjautuvat Googlen tunnuksilla palveluun minkä jälkeen he voivat lähettää teksti- ja kuvaviestejä muille online-käyttäjille."
      }
    }
  }
];

export default projectDetails;
