import reusableHtml from "./includeHtml.js";
import menu from "./menu.js";

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