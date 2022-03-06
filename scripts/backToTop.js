const backToTop = ($window) => {
    const $backToTopButton = $('#backToTop');

    $($window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
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