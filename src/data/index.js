import HTML from "../assets/images/html.svg";
import CSS from "../assets/images/css.svg";
import JS from "../assets/images/js.svg";
import REACT from "../assets/images/react.svg";
import TS from "../assets/images/ts.svg";
import NEXT from "../assets/images/next.svg";
import RECTANGLE from "../assets/images/Rectangle.svg";
import bestINTERN from "../assets/images/award.jpg";
import SOTM from "../assets/images/SOTM.png";
import Hifi from "../assets/images/hifiDonation.png";
import MOVIE from "../assets/images/WebMovieApp.png";
import WEATHER from "../assets/images/weatherApp.png";
import RESTAURANTE from "../assets/images/laRestaurante.png";

export const NAVLINKS = [
    {
        name: "Home",
        link: "#home",
    },
    {
        name: "About",
        link: "#home",
    },
    {
        name: "Projects",
        link: "#home",
    },
    {
        name: "Award",
        link: "#home",
    },
];

export const SKILLS = [
    {
        image: HTML,
    },
    {
        image: CSS,
    },
    {
        image: JS,
    },
    {
        image: REACT,
    },
    {
        image: TS,
    },
    {
        image: NEXT,
    },
];

export const PROJECTS = [
    {
        image: Hifi,
        title: "HiFi Donation App",
        description:
            "The Hifi Donation App is a SaaS web landing. This project is designed using React.js, Vite, and CSS 3.",
        stacks: [
            {
                image: REACT,
            },
            {
                image: CSS,
            },
        ],
        gitHub: "https://github.com/taiwoAkindele/HighFiDonationWebsite",
        live: "https://high-fi-donation.vercel.app/",
    },
    {
        image: MOVIE,
        title: "Movie Web App",
        description:
            "The moovie web app is a React App which calls an API for movie data. It is a multi-page react app which encompasses asynchronous calls, useStates, useEffects and other high level react hooks.",
        stacks: [
            {
                image: REACT,
            },
            {
                image: CSS,
            },
        ],
        gitHub: "https://github.com/taiwoAkindele/Movie-Web-App",
        live: "https://movie-web-app-one.vercel.app/",
    },
    {
        image: WEATHER,
        title: "Weather App",
        description:
            "This app was created using HTML, CSS and vanilla JS. The APP is used to get the weather condition of a location. A user only needs to input the location in the search bar and the weather information will be displayed below the search bar.",
        stacks: [
            {
                image: HTML,
            },
            {
                image: JS,
            },
            {
                image: CSS,
            },
        ],
        gitHub: "https://github.com/taiwoAkindele/weather-APP",
        live: "#",
    },
    {
        image: RESTAURANTE,
        title: "La Restaurante",
        description:
            "This Project is created with NextJs, React and CSS. This is project is an exact replica from a tutorial video (LamaDev) on YouTube.",
        stacks: [
            {
                image: REACT,
            },
            {
                image: NEXT,
            },
            {
                image: CSS,
            },
        ],
        gitHub: "https://github.com/taiwoAkindele/restaurante",
        live: "https://restaurante-rose-mu.vercel.app/",
    },
    // {
    //     image: RECTANGLE,
    //     title: "project 5",
    //     description:
    //         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque labore in laboriosam sunt distinctio culpa eum laborum quam eveniet consectetur.",
    //     stacks: [
    //         {
    //             image: REACT,
    //         },
    //         {
    //             image: JS,
    //         },
    //         {
    //             image: NEXT,
    //         },
    //     ],
    //     gitHub: "",
    //     live: "",
    // },
    // {
    //     image: RECTANGLE,
    //     title: "project 6",
    //     description:
    //         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque labore in laboriosam sunt distinctio culpa eum laborum quam eveniet consectetur.",
    //     stacks: [
    //         {
    //             image: REACT,
    //         },
    //         {
    //             image: JS,
    //         },
    //         {
    //             image: NEXT,
    //         },
    //     ],
    //     gitHub: "",
    //     live: "",
    // },
];

export const AWARD = [
    {
        image: bestINTERN,
    },
    {
        image: SOTM,
    },
    {
        image: bestINTERN,
    },
    {
        image: SOTM,
    },
    {
        image: bestINTERN,
    },
    {
        image: SOTM,
    },
    {
        image: bestINTERN,
    },
    {
        image: SOTM,
    },
    {
        image: bestINTERN,
    },
    {
        image: SOTM,
    },
];

export const SOCIALLINKS = [{}];
