import reusableHtml from "./includeHtml.js";
import menu from "./menu.js";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDY1bvNdfi3YZ4TLWZqpunc8HPqNvyAqmU",
  authDomain: "book-visit.firebaseapp.com",
  projectId: "book-visit",
  storageBucket: "book-visit.appspot.com",
  messagingSenderId: "1049607115705",
  appId: "1:1049607115705:web:b47fa97c426b7f00e39c68",
  measurementId: "G-2RMC15RRQR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Custom = () => {
    const $body = $('body');
    const $document = $(document);
    const $window = $(window);

    const init = () => {
        // reusableHtml();
        menu();
    }

    init();
};

$(function () {
    Custom();
})