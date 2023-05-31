const videoList = document.getElementById('videoList');

const loadVideos = async () => {
    try {
        const res = await fetch("./assets/js/videos.json");
        let uaVideos = await res.json();
        displayVideos(uaVideos);
    } catch (err) {
        console.error(err);
    }
};

const displayVideos = (videos) => {
    const htmlString = videos
        .map((video) => {
            return `
            <div class="searchDisplay">
                <img src="${video.thumbnail}" alt="${video.alt}">
                <h2>${video.title}</h2>
            </div>
            `;
        })
        .join('');
        videoList.innerHTML = htmlString;
};

loadVideos();