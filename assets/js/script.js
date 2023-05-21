let uaVideos = [];
// displays current date on page
var thisdayinua = moment().format("MMMM Do");
var display = document.getElementById('thisdayinua');
display.innerHTML = thisdayinua;


function fetchVideo() {
    fetch("./assets/js/videos.json")
        .then(response => response.json())
        .then(data => listVideo(data));   

        console.log(uaVideos.title)
}

function listVideo() {

}


// date in moment format MDD matches id
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

fetchVideo();
listVideo();
anniversary();
