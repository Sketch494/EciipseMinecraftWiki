document.getElementById("load-video").addEventListener("click", function () {
    const url = document.getElementById("video-url").value;
    const videoId = extractVideoId(url);
    
    if (videoId) {
        document.getElementById("youtube-iframe").src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1`;
        updateEmbedCode(videoId);
    } else {
        alert("Please enter a valid YouTube video URL.");
    }
});

document.getElementById("minimize-button-player").addEventListener("click", function () {
    const iframe = document.getElementById("youtube-iframe");
    if (iframe.style.display === "none") {
        iframe.style.display = "block";
    } else {
        iframe.style.display = "none";
    }
});

document.getElementById("maximize-button").addEventListener("click", function () {
    const iframe = document.getElementById("youtube-iframe");
    iframe.style.height = '100vh';
    iframe.style.width = '100%';
});

document.getElementById("pop-out-button").addEventListener("click", function () {
    const iframe = document.getElementById("youtube-iframe");
    window.open(iframe.src, "Pop Out Video", "width=560,height=315");
});

document.getElementById("close-button").addEventListener("click", function () {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.display = "none"; // Hides the sidebar
});

function extractVideoId(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

function updateEmbedCode(videoId) {
    const embedCode = `<iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
    document.getElementById("embed-code").textContent = embedCode;
}
