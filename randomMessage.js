var fetchedContent = [];

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

    switch (getRandomInt(2)) {
        case 0:
            //Text
            contentFetched.textContent = fetchedContent[getRandomInt(fetchedContent.length)].textContent;
            contentDiv.appendChild(contentFetched);
            break;
        case 1:
            //Audio
            contentDiv.innerHTML = `<audio controls "> <source src="audioFiles/${getRandomInt(29)}.m4a" type="audio/mpeg">Your browser does not support the audio element.</audio>`
            console.log("1");
            break;
        case 2:
            //Photo
            var randomNum = getRandomInt(64);
            if(randomNum < 61)
                contentDiv.innerHTML = `<img style="width:100%;" src="img_Video/${randomNum}.jpg" alt="Cutie Pie">`;
            else
                contentDiv.innerHTML = `<video style="width:100%;" src="img_Video/${randomNum}.mp4"></video>`;
            console.log("2");
            break;
    
        default:
            console.log("WTF");
            break;
    }

    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * (max - 0 + 1)) + 0;
}