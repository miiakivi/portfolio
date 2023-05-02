export default {
  _navigation: {
    about: "about",
    projects: "projects",
    skills: "skills",
    contact: "Contact me"
  },
  get navigation() {
    return this["_navigation"];
  },
  set navigation( value ) {
    this["_navigation"] = value;
  },
  hero: {
    title: "Hi, I am",
    subtitle: "Software Developer",
    and: "and",
    "words-animation": {
      word1: "traveler",
      word2: "chef",
      word3: "optimist",
      word4: "ukulele player"
    },
    button: "Let's talk"
  },
  about: {
    title: "About",
    subtitle: "Who I am",
    paragraph1:
      "I'm a front-end developer passionate about creating elegant, user-friendly applications with a strong commitment to quality.",
    paragraph2:
      "When I'm not sitting in front of a computer, you can find me traveling to new places or diving headfirst into sci-fi books, movies, and video games. I'm always up for a good adventure and love exploring new worlds, whether they're fictional or not.",
    paragraph3:
      "I'm currently on the hunt for my next big challenge as a front-end developer. I'm motivated about expanding my skills and learning new things, and I can't wait to jump into fresh projects that will push me to grow even more.",
    paragraph4:
      "If you are interested or otherwise just want to say hello, please feel free to contact me.",

    button: "Say hello"
  },
  projects: {
    title: "Projects",
    subtitle: "A Selection Of Stuff I've Built"
  },
  projectDetails: {
    button: "Learn more"
  },
  skills: {
    title: "Skills",
    subtitle: "Technologies I love to use"
  },
  footer: {
    lets: "Let's",
    "words-animation": {
      word1: "work together",
      word2: "collaborate",
      word3: "meet in teams",
      word4: "have lunch"
    },
    cta: {
      part1: "Drop me an ",
      part2: " Email"
    },
    "socials-title": "Or just say hi!"
  }
};
