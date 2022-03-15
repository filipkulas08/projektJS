const login = () => {
    const $signUpButton = $('#signUp');
    const $loginButton = $('#loginBtn');
    const $logoutButton = $('.logoutButton');
    const $errorMessage = $('.errorMessage');
    

    const loginFunction = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(function(firebaseUser) {
            localStorage.setItem('myPage.expectSignIn', '1');
            location.reload();
        }
            ).catch(function(error) {
            var message = error.message;
            $errorMessage.addClass('exist');
            $errorMessage.text(message);
            $('input').val('');
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              localStorage.setItem('userID', user.uid)
            }
          });
    }
    
    
    $signUpButton.on('click', () => {
        var email = document.getElementById('emailRegister').value;
        var password = document.getElementById('passwordRegister').value;

        firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
            loginFunction(email, password);
        }).catch(e=>{
        });

        $('input').val('');
    })

    $loginButton.on('click', () => {
        let email = document.getElementById('emailLogin').value;
        let password = document.getElementById('passwordLogin').value;

        loginFunction(email, password);
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