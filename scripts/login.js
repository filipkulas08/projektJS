const login = () => {
    const $signUpButton = $('#signUp');
    const $loginButton = $('#loginBtn');
    const $logoutButton = $('.logoutButton');
    const $errorMessage = $('.errorMessage');
    
    
    $signUpButton.on('click', () => {
        var email = document.getElementById('emailRegister').value;
        var password = document.getElementById('passwordRegister').value;

        firebase.auth().createUserWithEmailAndPassword(email, password).catch(e=>{
        });

        $('input').val('');
    })

    $loginButton.on('click', () => {
        let email = document.getElementById('emailLogin').value;
        let password = document.getElementById('passwordLogin').value;

        firebase.auth().signInWithEmailAndPassword(email, password).then(function(firebaseUser) {
            localStorage.setItem('myPage.expectSignIn', '1');
            location.reload();
        }
            ).catch(function(error) {
            var errorCode = error.code;
            var message = error.message;
            console.log(errorCode);
            console.log(message);
            $errorMessage.addClass('exist');
            $errorMessage.text(message);
        });

        $('input').val('');
    });

    $logoutButton.on('click', () => {
        firebase.auth().signOut().then(function (firebaseUser) {
            localStorage.removeItem('myPage.expectSignIn');
            location.reload();
        }).catch(e => {
            console.log(e)
        });
    });

}

export default login;