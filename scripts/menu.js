const menu = () => {
    const menuOpenClass = 'open';
    const $menu = $('.mobile-nav');
    const $menuTitle = $menu.find('.navigation-title');
    const $sectionLink = $('.menu-item-level-1');

    const init = () => {
        const resetState = () => {
            $menu.removeClass(menuOpenClass);
            $menuTitle.removeClass(menuOpenClass);
        };

        $menuTitle.on('click', () => {
            
            if ($menu.hasClass(menuOpenClass)) {
                resetState();
                return;
            }

            $menu.toggleClass(menuOpenClass);
            $menuTitle.toggleClass(menuOpenClass);
        });

        $sectionLink.on('click', () => {
            resetState();
                return;
        })
    };

    init();
};

export default menu;