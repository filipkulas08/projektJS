const dateTimePicker = (db) => {
    var array = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];
    const $bookingSection = $('.booking');
    const $timePicker = $('#timepicker');
    $('#datepicker').datetimepicker({
        onGenerate: function (ct) {
            array = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];
        },

        onSelectDate: function () {
            
            const $Fulldate = $('#datepicker').datetimepicker('getValue');
            const $year = $Fulldate.getFullYear();
            const $month = $Fulldate.getMonth() +1;
            const $day = $Fulldate.getDate();
            var date = $day + '/' + $month + '/' + $year;
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
        minDate:0
    });

    $('#datepicker').on('change', () => {
        $timePicker.addClass('show');
        console.log(array)
        $('#timepicker').datetimepicker({
            onGenerate: function (array) {},
            datepicker: false,
            format: 'H,i',
            allowTimes: array
        });
    })


    $('#test').on('click', () => {
        const $Fulldate = $('#datepicker').datetimepicker('getValue');
        const $FullHour = $('#timepicker').datetimepicker('getValue');
        const userId = localStorage.getItem('userID');
        const $year = $Fulldate.getFullYear();
        const $month = $Fulldate.getMonth() +1;
        const $day = $Fulldate.getDate();
        var date = $day + '/' + $month + '/' + $year;
        const $hour = $FullHour.getHours() + ':00';
        db.collection("Visits").add({
                date: date,
                hour: $hour,
                userId: userId

            })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                console.log(date);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    })

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            $bookingSection.addClass('visible');
        }
      });
}
export default dateTimePicker;