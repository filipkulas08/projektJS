const loginGoogle = () => {

    const $loginButton = $('#login');
    let provider = new firebase.auth.GoogleAuthProvider()


    $loginButton.on('click', () => {
        firebase.auth().signInWithPopup(provider).then(function(firebaseUser) {
            localStorage.setItem('myPage.expectSignIn', '1');
            location.reload();
        }
            ).catch(e => {
            console.log(e)
        })
        
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              localStorage.setItem('userID', user.uid)
            }
          });
    })
};

export default loginGoogle;