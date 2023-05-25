// displays current date on page
var thisdayinua = moment().format("MMMM Do");
var display = document.getElementById('thisdayinua');
display.innerHTML = thisdayinua;


// find and read video data from json file
fetch("./assets/js/videos.json")
    .then(function(response){
        // responds with json data
        return response.json();
    })
    .then(function(videos) {
        let uaVideos = document.querySelector("#videoDisplay");
        let display = "";
        for (let video of videos){
            
                // reads 3 or 4 digit video id
                var calendarDate = video.id;
                // reads moment date as single 3 or 4 digit number 
                var thisDay = moment().format("MDD");

                // if video id strictly equals moment number, display object
                // if date is june 27, 'thisDay' reads it as 627 and will strictly equal and display the video with the id 627
                // days of the month are always double digit (01-09, 10-31), months are only double digit when applicable (1-12)
                if (calendarDate === thisDay) {
                    display += `
                        <div>
                            <img src="${video.thumbnail}" alt="${video.alt}">
                            <h2>${video.title}</h2>
                            <p>${video.description}</p>
                        </div>
                        `;
                }
            
                uaVideos.innerHTML = display;
        }
    })

    // clock countdown
    var countdownDate = new Date("November 14, 2023 00:00:00").getTime();

    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countdownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // leading 0's
        if (days < "10") { days = "0" + days; }
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        document.getElementById("clock").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("clock").innerHTML = "00:00:00:00";
        }
    }, 1000);