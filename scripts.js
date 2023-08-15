import LatestPlayed from "./LatestPlayed.js";

const lastPlayed = document.getElementById("lastPlayed");
const recentList = document.getElementById("recentList");

const API_URL =
  "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBwltt2oaWVccsqdp7uKb4_ZLJby8IFcCE&channelId=UC2qcFS3gIq5sJouBJzw6nSA&type=video&part=snippet&maxResults=10&order=date";

function getLast() {
  axios
    .get(API_URL)
    .then((response) => {
      const data1 = response.data.items[0];
      const data2 = response.data.items;
      console.log(data2.id);
      const lastImg = data1.snippet.thumbnails.high.url;
      lastPlayed.innerHTML = LatestPlayed(data1);

      for (let i in data2) {
        console.log(data2[i].id.videoId);
        var elemento = document.createElement("div");
        elemento.innerHTML = `<iframe width="150" height="84" src="https://www.youtube.com/embed/${data2[i].id.videoId}?controls=0"
        title=""
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        </iframe>`;
        recentList.appendChild(elemento);
      }
    })
    .catch((error) => console.log(error));
}

getLast();

lastPlayed.addEventListener("click", () => {
  alert("modal aberto");
});
