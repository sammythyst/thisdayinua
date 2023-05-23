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
            
                var calendarDate = video.id;
                var thisDay = moment().format("MDD");

                if (calendarDate === thisDay) {
                    display += `
                        <div class="today">
                            <h2>${video.title}</h2>
                            <p>${video.description}</p>
                        </div>
                        `;
                }
            
                uaVideos.innerHTML = display;
        }
    })