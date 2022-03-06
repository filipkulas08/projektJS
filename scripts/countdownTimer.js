const countdownTimer = (db) => {
    const $bookingForm = $('.booking-form');
    const $nextVisit = $('.nextVisit');
    // const countdownTiles = document.getElementById("tiles");
    const $countdownTiles = $(".tiles");
    const userId = localStorage.getItem('userID');
    var today = new Date().getTime();
    

    db.collection("Visits").where("dateNumber", ">=", today).where("userId", "==", userId)
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                var data = doc.data();
                var date = data.date;
                var hour = data.hour;
                if (date) {
                    $bookingForm.addClass('hidden');
                    $nextVisit.addClass('visible');
                    countdown(date,hour);
                } else {
                    $bookingForm.removeClass('hidden');
                    $nextVisit.removeClass('visible');
                }
            });
        })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });
    
    var countdown = (date,hour) => {
        var countdownDate = new Date(date + ' ' + hour).getTime();
        console.log(countdownDate);

        var x = setInterval(function() {

            var now = new Date().getTime();
            var distance = countdownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            $countdownTiles.html("<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>");
          }, 1000);
    }

}
export default countdownTimer