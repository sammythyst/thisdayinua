$(document).ready(function () {
    var thisdayinua = moment().format("MMMM Do");
    var display = document.getElementById('thisdayinua');
    display.innerHTML = thisdayinua;

    function anniversary() {
        var thisDay = moment().format("MDD");
        var date = $(".date");
        
            date.each(function() {
                var calendarDate = $(this).attr('id');
                console.log(calendarDate, thisDay);

                if (calendarDate === thisDay) {
                    $(this).addClass("today");
                } else {
                    $(this).addClass("nottoday");
                }
            })
        }

anniversary();
})