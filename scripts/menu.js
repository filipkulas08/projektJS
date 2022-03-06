const menu = () => {
    const menuOpenClass = 'open';
    const $menu = $('.mobile-nav');
    const $menuTitle = $menu.find('.navigation-title');

    const init = () => {
        const resetState = () => {
            $menu.removeClass(menuOpenClass);
            $menuTitle.removeClass(menuOpenClass);
        };

        $menuTitle.bind('click', () => {
            
            if ($menu.hasClass(menuOpenClass)) {
                resetState();
                return;
            }

            $menu.toggleClass(menuOpenClass);
            $menuTitle.toggleClass(menuOpenClass);
        });
    };

    init();
};

export default menu;