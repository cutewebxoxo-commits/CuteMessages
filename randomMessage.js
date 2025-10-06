var fetchedContent = [];
var numberAudio = 0;

fetch("elinMessages.xml")
    .then(response => response.text())
    .then(str => {
        // Parse XML
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(str, "application/xml");

        // Get all <s> elements
        fetchedContent = xmlDoc.getElementsByTagName("s");


        // Add sentences to the page

    })
    .catch(err => console.error("Error loading XML:", err));


function randomContent() {
    document.getElementById("entryGif").style.display = "none";
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
    const contentFetched = document.createElement("div");

    // console.log(getRandomInt(fetchedContent.length));

    switch (getRandomInt(2)) {
        case 0:
            //Text
            var fetchedIndex = getRandomInt(fetchedContent.length)-1;
            if(fetchedIndex < 0)
                fetchedIndex = 0;
            contentFetched.innerHTML = fetchedContent[fetchedIndex].innerHTML;
            contentDiv.appendChild(contentFetched);
            break;
        case 1:
            //Audio
            numberAudio = getRandomInt(29);
            contentDiv.innerHTML = `<audio controls "> <source src="audioFiles/${numberAudio}.m4a" type="audio/mp4">Your browser does not support the audio element.</audio>`
            break;
        case 2:
            //Photo
            var randomNum = getRandomInt(84);
            contentDiv.innerHTML = `<img style="width:100%; max-height:75vh;" src="https://raw.githubusercontent.com/cutewebxoxo-commits/CuteMessages/refs/heads/main/img_Video/${randomNum}.JPG" alt="Cutie Pie">`;
            break;
    
        default:
            console.log("WTF");
            break;
    }

    
}

document.querySelector("#playBtn").addEventListener("click", () => {
  const audio = new Audio(`audioFiles/${numberAudio}.m4a`);
  audio.play().catch(err => console.log("Playback blocked:", err));
});


function getRandomInt(max) {
    return Math.floor(Math.random() * (max - 0 + 1)) + 0;
}
