import battleshipImage from "../assets/battleshipProject.jpg";
import weatherImage from "../assets/weatherProject.jpg";
import cvImage from "../assets/cvProject.jpg";
import superchatImage from "../assets/superchatProject.jpg";
import inventoryImage from "../assets/inventoryProject.jpg";
import azureImage from "../assets/azureProject.jpg";

const battleships = {
    title: 'battleships',
    image: battleshipImage,
    description: `Game created with React and Webpack. Classic battleships game where the user plays against AI.
                        The whole game loop and players are created using JavaScript objects and classes. This was also
                        my first touch using TDD.`,
    url: 'https://github.com/MiiaNyy/Battleships',
};

const cvMaker = {
    title: 'cv Maker',
    image: cvImage,
    description: `A deep dive into React and React Hooks. In the project, user can create their own CV filling different
    form components. All information provided by the 
    user is stored in local storage. If the user wants to later add new information or add new sections to the CV, they don't need to start from scratch.`,
    url: 'https://github.com/MiiaNyy/cv-maker',
};

const weather = {
    title: 'weather forecast',
    image: weatherImage,
    description: `Using REST API from open weather map users can search current weather info and 5-day forecast for a 
    specific location.The goal of this project was to get more familiar with REST APIs and asynchronous javascript. I
     used the es6 async/await and fetch() method to fetch resources asynchronously across the network and get responses from API.`,
    url: 'https://github.com/MiiaNyy/weather-app',
};

const superchat = {
    title: 'super chat',
    image: superchatImage,
    description: `Chat application build using Firebase, Firestore database and Firebase Storage services, 
    Google authentication. In app users have to sign in to send and receive text and image messages to other online users.`,
    url: 'https://github.com/MiiaNyy/superchat',
};

const inventory = {
    title: 'Inventory manager',
    image: inventoryImage,
    description: `Inventory application where I practiced MVC architecture using Node.js Express as backend and MongoDB as database.
    The app allows users to browse the entire inventory of the company or find specific items according to different categories; 
    price, species, or size of the item. App is created from fully dynamic pages using Handlebars.`,
    url: 'https://github.com/MiiaNyy/RSA-inventory',
};

const chatBot = {
    title: 'Azure chat bot',
    image: azureImage,
    description: `This project is part two of my inventory and Azure chat bot project. 
    Projects idea was to create homepage where user can talk to the chat bot. Bot can answer questions about company but it main purpose is to connect user to the inventory.
    Bot is created using Microsoft Azure Bot Services, mainly Azure Bot Composer and it is connected to QnA Maker Knowledge Base and Azures Language Understanding (LUIS).`,
    url: 'https://github.com/MiiaNyy/ramses-the-chat-bot',
};


export { battleships, cvMaker, weather, superchat, chatBot, inventory };
