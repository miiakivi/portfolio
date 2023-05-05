import battleshipImage from "../assets/battleshipProject.jpg";
import weatherImage from "../assets/weatherProject.jpg";
import cvImage from "../assets/cvProject.jpg";
import superchatImage from "../assets/superchatProject.jpg";
import inventoryImage from "../assets/inventoryProject.jpg";
import azureImage from "../assets/azureProject.jpg";
import portfolioImage from "../assets/portfolioProject.jpg";
import hslImage from "../assets/hslBicycleProject.jpg";

const projectDetails = [
  {
    image: battleshipImage,
    url: "https://github.com/MiiaNyy/Battleships",
    favorite: true,
    text: {
      en: {
        title: "battleships",
        description:
          "This classic battleships game was built using React and Webpack, and features an AI opponent for the player to compete against. Throughout the development process, I focused on utilizing JavaScript objects and classes to create the game loop and player interactions. With TDD, I was able to thoroughly test the functionality of the Player, Ship, and Gameboard classes before integrating them into the game loop. ⭐️ My favorite project "
      },
      fin: {
        title: "Battleships",
        description:
          "Reactin ja Webpackin avulla rakennettu klassinen laivanupotus peli, jossa pelaaja pelaa AI:tä vastaan. Projektin tavoitteena oli harjoitella JavaScript-objektien ja -classien käyttöä ja ottaa ensikosketus TDD (Test Driven Development) -käytäntöihin Jest:n avulla."
      }
    }
  },
  {
    image: hslImage,
    url: "https://github.com/MiiaNyy/helsinki-city-bike-app",
    text: {
      en: {
        title: "HSL City Bicycle App",
        description:
          "This app validates and displays data from HSL city bicycle journeys and stations during 1.5.-31.7.2021. It uses GraphQL, MongoDB, and Apollo Server to validate CSV data and create a local database with two collections. The client can access the data using GraphQL queries, including lists of journeys and stations, total journey counts per station, average distances, and top 5 popular stations."
      },
      fin: {
        title: "HSL Kaupunkipyörä Appi",
        description:
          "Tämä sovellus validoi ja näyttää HSL-kaupunkipyörämatkojen ja asemien tietoja ajalta 1.5.-31.7.2021. Se käyttää GraphQL:ää, MongoDB:tä ja Apollo Serveriä CSV-tietojen validointiin ja paikallisen tietokannan kahden kokoelman luomiseen. Client näyttää tiedot käyttäjälle GraphQL-kyselyjen avulla, mukaan lukien matkojen ja asemien luettelot, matkalaskurit asemakohtaisesti, keskimääräiset matkat ja suosituimmat asemat."
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
          "As I started searching new work opportunities, I wanted to enhance my online presence and decided to create a portfolio project to showcase my skills and experience. Using a combination of React, Typescript, Bootstrap, and CSS, featuring animations using the react-animation-on-scroll package and English and Finnish translations with the i18next library I developed a simple and informative portfolio that highlights my abilities and accomplishments."
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
          "Using Microsoft Azure Bot Services, I developed a chatbot that not only connects users to the (imaginary) company's inventory management system, but also provides quick answers to frequently asked questions. The chatbot is integrated with the QnA Maker Knowledge Base and Azure's Language Understanding (LUIS) service to enhance its functionality and responsiveness."
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
          "For my inventory application project, I utilized the Model-View-Controller (MVC) architecture in conjunction with Node.js Express as the backend and MongoDB as the database. The app offers a range of features that make it easy for users to browse the entire inventory of the company or search for specific items based on different categories such as price, species, or size. The app's dynamic pages created using Handlebars contribute to its user-friendliness and effectiveness. "
      },
      fin: {
        title: "inventaario sovellus",
        description:
          "Inventaario sovellus, jossa harjoittelin MVC-arkkitehtuuria. Rakensin sovelluksen käyttäen Node.js Expressiä backend puolella ja MongoDB:tä tietokantana. Sovelluksen avulla käyttäjät voivat selata yrityksen koko varastoa tai löytää tiettyjä kohteita eri luokkien mukaan. Sovellus on luotu täysin dynaamisista sivuista Handlebars:n avulla"
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
          "Practising React and React Hooks, I dived deeply into the workings of these powerful tools to create a user-friendly app that allows users to create their own CV by filling different form components. All information provided by the user is stored in local storage, allowing for easy retrieval and modification at a later time."
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
          "This project utilizes REST APIs from open weather map to enable users to search for current weather information and 5-day forecasts for specific locations. The project focused on improving my proficiency in asynchronous JavaScript and the use of modern JavaScript techniques such as async/await and fetch() methods. Overall, this project showcases my ability to utilize REST APIs and modern JavaScript techniques."
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
          "Chat application that utilized Firebase, Firestore database, Firebase Storage services, and Google authentication to enable users to sign in and send/receive text and image messages to other online users. This project demonstrates my proficiency in creating efficient and secure web applications that prioritize real-time communication."
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
