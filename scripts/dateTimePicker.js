const dateTimePicker = (db) => {
    var array = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];
    const $bookingSection = $('.booking');
    const $timePicker = $('.timepicker');
    const userId = localStorage.getItem('userID');

    $('#datepicker').datetimepicker({
        onGenerate: function (ct) {
            array = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];
        },

        onSelectDate: function () {

            const $Fulldate = $('#datepicker').datetimepicker('getValue');
            const $year = $Fulldate.getFullYear();
            const $month = $Fulldate.getMonth() + 1;
            const $day = $Fulldate.getDate();
            var date = $month + '/' + $day + '/' + $year;
            db.collection("Visits").where("date", "==", date)
                .get()
                .then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        var data = doc.data();
                        var hour = data.hour;
                        var index = array.indexOf(hour);;
                        if (index !== -1) {
                            array.splice(index, 1);
                        }
                    });
                })
                .catch(function (error) {
                    console.log("Error getting documents: ", error);
                });
        },
        weekends: [],
        timepicker: false,
        format: 'd.m.Y',
        minDate: 0
    });

    $('#datepicker').on('change', () => {
        $timePicker.addClass('show');
        $('#timepicker').datetimepicker({
            onGenerate: function (array) {},
            datepicker: false,
            format: 'H,i',
            allowTimes: array
        });
    })


    $('#submit').on('click', () => {
        var $Fulldate = $('#datepicker').datetimepicker('getValue');
        var $FullHour = $('#timepicker').datetimepicker('getValue');
        var $year = $Fulldate.getFullYear();
        var $month = $Fulldate.getMonth() + 1;
        var $day = $Fulldate.getDate();
        var $date = $month + '/' + $day + '/' + $year;
        var $hour = $FullHour.getHours() + ':00';
        var $dateNumber = new Date($date + ' ' + $hour).getTime();
        const $firstName = $('#firstName').val();
        const $lasttName = $('#lastName').val();
        const $email = $('#email').val();
        const $number = $('#number').val();

        db.collection("Visits").add({
                date: $date,
                hour: $hour,
                userId: userId,
                dateNumber: $dateNumber,
                firstName: $firstName,
                lastName:$lasttName,
                email:$email,
                phoneNumber:$number,

            })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                console.log($date);
                location.reload();
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    })

    firebase.auth().onAuthStateChanged((user) => {
        if (localStorage.getItem('myPage.expectSignIn')) {
            $bookingSection.addClass('visible');
        }
    });
}
export default dateTimePicker;