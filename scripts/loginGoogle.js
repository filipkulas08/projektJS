const loginGoogle = () => {

    const $loginButton = $('#login');
    let provider = new firebase.auth.GoogleAuthProvider()


    $loginButton.on('click', () => {
        firebase.auth().signInWithPopup(provider).then(function(firebaseUser) {
            location.reload();
        }
            ).catch(e => {
            console.log(e)
        })
    })
};

export default loginGoogle;