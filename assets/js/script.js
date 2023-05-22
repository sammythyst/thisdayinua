// displays current date on page
var thisdayinua = moment().format("MMMM Do");
var display = document.getElementById('thisdayinua');
display.innerHTML = thisdayinua;


// find and read video data from json file
fetch("./assets/js/videos.json")
    .then(function(response){
        return response.json();
    })
    .then(function(videos) {
        let uaVideos = document.querySelector("#videoDisplay");
        let display = "";
        for (let video of videos){
            display += `
                <h2>${video.title}</h2>
                <p>${video.description}</p>
            `;
        }

        uaVideos.innerHTML = display;
    })



// date in moment format MDD matches id
function displayByDate() {
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


displayByDate();
