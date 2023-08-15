function LatestPlayed(data1) {
  console.log(data1.id.videoId);
  return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${data1.id.videoId}?controls=0"
  title=""
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
  </iframe>`;
}

export default LatestPlayed;
