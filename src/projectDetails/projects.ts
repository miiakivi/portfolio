import battleshipImage from "../assets/battleshipProject.jpg";
import weatherImage from "../assets/weatherProject.jpg";
import cvImage from "../assets/cvProject.jpg";
import superchatImage from "../assets/superchatProject.jpg";
import inventoryImage from "../assets/inventoryProject.jpg";
import azureImage from "../assets/azureProject.jpg";


const battleships = {
    image: battleshipImage,
    url: 'https://github.com/MiiaNyy/Battleships',
    text: {
        en: {
            title: 'battleships',
            description: `Game created with React and Webpack. Classic battleships game where the user plays against AI.
                        The whole game loop and players are created using JavaScript objects and classes. This was also
                        my first touch using TDD.`,
        },
        fin: {
            title: 'Battleships',
            description: 'Reactin ja Webpackin avulla rakennettu klassinen laivanupotus peli. Pelissä pelaaja pelaa' +
                ' AI:tä vastaan. Pelin rakenne on rakennettu JavaScript objecteja ja classeja käyttäen. Tässä' +
                ' projektissa sain myös ensikosketuksen testaukseen Jest:n avulla.',
        }
    }
};

const cvMaker = {
    image: cvImage,
    url: 'https://github.com/MiiaNyy/cv-maker',
    text: {
        en: {
            title: 'cv Maker',
            description: `A deep dive into React and React Hooks. In the app, user can create their own CV by filling different
           form components. All information provided by the 
           user is stored in local storage. If the user wants to later add new information or add new sections to the CV, they don't need to start from scratch.`,
        }, fin: {
            title: 'CV maker',
            description: 'Syvä sukellus Reactiin ja React Hooksien käyttöön. Sovelluksessa käyttäjä voi' +
                ' rakentaa oman CV:n, täyttämällä erillaisia lomakkeita omilla tiedoillaan. Kaikki käyttäjän antamat' +
                ' tiedot tallennetaan selaimen local storageen. Jos käyttäjä haluaa myöhemmin listätä tai muokata' +
                ' antamiaan tietoja, hänen ei näin tarvitse aloittaa alusta.',
        }
    }

};

const weather = {
    image: weatherImage,
    url: 'https://github.com/MiiaNyy/weather-app',
    text: {
        en: {
            title: 'weather forecast',
            description: `Using REST API from open weather map users can search current weather info and 5-day forecast for a 
            specific location.The goal of this project was to get more familiar with REST APIs and asynchronous javascript. I
            used the es6 async/await and fetch() method to fetch resources asynchronously across the network and get responses from API.`,
        },
        fin: {
            title: 'sään ennustaja',
            description: 'Open weather map REST API käyttäen, sovelluksen käyttäjät voivat hakea tämänhetkisen sään ja viiden päivän sää ennusteen tietystä sijainnista. Projektin tavoitteena oli tutustua tarkemmin REST API ja asynkroniseen JavaScriptiin. Käytin ES6 async/await ja fetch() methodeja  resurssien noutamiseen asynkronisesti verkon yli ja vastausten saamiseksi API:lta.',
        }
    }
};

const superchat = {
    image: superchatImage,
    url: 'https://github.com/MiiaNyy/superchat',
    text: {
        en: {
            title: 'super chat',
            description: `Chat application build using Firebase, Firestore database and Firebase Storage services, 
            Google authentication. In app users have to sign in to send and receive text and image messages to other online users.`,
        },
        fin: {
            title: 'chatti appi',
            description: 'Chat sovellus, mikä on rakennettu Firebasen avulla. Käytin projektissa Firestore tietokantaa, Firebase Storagea ja Googlen todennusta. Sovelluksessa käyttäjät kirjautuvat Googlen tunnuksilla palveluun minkä jälkeen he voivat lähettää teksti- ja kuvaviestejä muille online-käyttäjille.',
        }
    }
};

const inventory = {
    image: inventoryImage,
    url: 'https://github.com/MiiaNyy/RSA-inventory',
    text: {
        en: {
            title: 'Inventory manager',
            description: `Inventory application where I practiced MVC architecture using Node.js Express as backend and MongoDB as database.
            The app allows users to browse the entire inventory of the company or find specific items according to different categories; 
            price, species, or size of the item. App is created from fully dynamic pages using Handlebars.`,
        },
        fin: {
            title: 'inventaario sovellus',
            description: 'Inventaario sovellus, jossa harjoittelin MVC-arkkitehtuuria. Rakensin sovelluksen käyttäen' +
                ' Node.js Expressiä backend puolella ja MongoDB:tä tietokantana. Sovelluksen avulla käyttäjät voivat ' +
                'selata yrityksen koko varastoa tai löytää tiettyjä kohteita eri luokkien mukaan. . Sovellus on luotu täysin dynaamisista sivuista Handlebars:n avulla\n',
        }
    }
};

const chatBot = {
    image: azureImage,
    url: 'https://github.com/MiiaNyy/ramses-the-chat-bot',

    text: {
        en: {
            title: 'Azure chat bot',
            description: `This project is part two of my inventory and Azure chat bot project. 
            Projects idea was to create homepage where user can talk to the chat bot. Bot can answer questions about company but it main purpose is to connect user to the inventory.
            Bot is created using Microsoft Azure Bot Services, mainly Azure Bot Composer and it is connected to QnA Maker Knowledge Base and Azures Language Understanding (LUIS).`,
        },
        fin: {
            title: 'Azure virtuaalinen avustaja',
            description: 'Projektin idea oli luoda kotisivu, jossa käyttäjä voi keskustella chat-botin kanssa. Bot voi vastata yritystä koskeviin kysymyksiin, mutta sen päätarkoitus on yhdistää käyttäjä yrityksen inventaarion hallintaan. Botin kautta käyttäjä voi luoda uusia, poistaa tai muokata vanhoja tuotteita inventaariosta.\n' +
                '             Bot on luotu käyttämällä Microsoft Azure Bot Services -palvelua, pääasiassa Azure Bot Composeria, ja se on yhdistetty QnA Maker Knowledge Base -tietokantaan ja Azures Language Understandingiin (LUIS).\n',
        }
    }
};


export { battleships, cvMaker, weather, superchat, chatBot, inventory };
