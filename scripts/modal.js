const modal = () => {
    const $openLoginButton = $('.loginButton');
    const $openRegisterButton = $('.registerButton');
    const $logutButton = $('.logoutButton');
    const $loginModal = $('.modal-popup.login');
    const $registerModal = $('.modal-popup.register');
    const $closeButton = $('.modal-popup').find('.icon');
    
    $openLoginButton.on('click', (event) => {
        event.preventDefault();
        $loginModal.addClass('open');
    });

    $openRegisterButton.on('click', (event) => {
        event.preventDefault();
        $registerModal.addClass('open');
    });

    $closeButton.on('click', (event) => {
        event.preventDefault();
        $loginModal.removeClass('open');
        $registerModal.removeClass('open');
    });

    if (localStorage.getItem('myPage.expectSignIn')) {
        $openLoginButton.removeClass('open');
        $openRegisterButton.removeClass('open');
        $logutButton.addClass('open');
    } else {
        $openLoginButton.addClass('open');
        $openRegisterButton.addClass('open');
        $logutButton.removeClass('open');
    }
}

export default modal;