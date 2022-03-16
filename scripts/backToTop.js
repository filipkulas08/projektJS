const backToTop = ($window) => {
    const $backToTopButton = $('#backToTop');
    const $windowHeight  = $($window).height();
    const $mainHeight = $('footer').offset().top;
    const $margin = 90;

    $($window).scroll(function() { 
        if ($(this).scrollTop() > 100 && ($(this).scrollTop() < $mainHeight - $windowHeight + $margin)) { 
            $backToTopButton.fadeIn(); 
        } else { 
            $backToTopButton.fadeOut(); 
        } 
    }); 

    $backToTopButton.on('click', () => { 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    });
}
export default backToTop;