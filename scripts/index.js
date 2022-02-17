import menu from "./menu.js";
import loginGoogle from "./loginGoogle.js";
import initFirebase from "./initFirebase.js";
import login from "./login.js";
import modal from "./modal.js";

const Custom = () => {
    const $body = $('body');
    const $document = $(document);
    const $window = $(window);

    const init = () => {
        initFirebase();
        menu();
        loginGoogle();
        login();
        modal();
    }

    init();
};

$(function () {
    Custom();
})