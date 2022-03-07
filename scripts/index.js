import menu from './menu.js';
import loginGoogle from './loginGoogle.js';
import login from './login.js';
import modal from './modal.js';
import dateTimePicker from './dateTimePicker.js'
import countdownTimer from './countdownTimer.js';
import slider from './slider.js';
import backToTop from './backToTop.js';
const Custom = () => {
    const $body = $('body');
    const $document = $(document);
    const $window = $(window);

    const init = () => {
      const firebaseConfig = {
        apiKey: "AIzaSyDY1bvNdfi3YZ4TLWZqpunc8HPqNvyAqmU",
        authDomain: "book-visit.firebaseapp.com",
        projectId: "book-visit",
        storageBucket: "book-visit.appspot.com",
        messagingSenderId: "1049607115705",
        appId: "1:1049607115705:web:b47fa97c426b7f00e39c68",
        measurementId: "G-2RMC15RRQR"
      };

      const app = firebase.initializeApp(firebaseConfig);
      const perf = firebase.performance(app);
      const db = firebase.firestore(app);
      
        // initFirebase();
        menu();
        loginGoogle();
        login(perf);
        modal();
        dateTimePicker(db);
        countdownTimer(db);
        slider();
        backToTop($window);
    }

    init();
};

$(function () {
    Custom();
})