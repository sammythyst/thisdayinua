const videoList = document.getElementById('videoList');
const searchBar = document.getElementById('searchBar');
let uaVideos = [];

// search bar searches
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredVideos = uaVideos.filter(video => {
        return (
            video.title.toLowerCase().includes(searchString) ||
            video.id.includes(searchString)
        );
    });
    displayVideos(filteredVideos);
});

// calls for data in json
const loadVideos = async () => {
    try {
        const res = await fetch("./assets/js/videos.json");
        uaVideos = await res.json();
        displayVideos(uaVideos);
    } catch (err) {
        console.error(err);
    }
};

// displays json data
const displayVideos = (videos) => {
    const htmlString = videos
        .map((video) => {
            return `
            <div class="searchDisplay">
                <img src="${video.thumbnail}" alt="${video.alt}">
                <h2>${video.title}</h2>
                    <div id="more">
                        <p>Date: ${video.id}</p>
                        <p>${video.description}</p>
                    </div>
                <button onclick="seeDetails()" id="button">See more</button>
            </div>
            `;
        })
        .join('');
        videoList.innerHTML = htmlString;
};

function seeDetails() {
    var moreDetails = document.getElementById("more");
    var button = document.getElementById("button");

    if (moreDetails.style.display === "inline") {
        button.innerHTML = "Read more";
        moreDetails.style.display = "none";
    } else {
        button.innerHTML = "See less";
        moreDetails.style.display = "inline";
    }
};

loadVideos();