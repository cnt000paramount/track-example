function main(url) {
  fetch(url)
    .then((response) => response.text())
    // .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((cc) => {
      const blob = new Blob([cc], { type: "application/ttml+xml" });
      const track = document.createElement("track");
      track.src = URL.createObjectURL(blob);
      track.kind = "captions";
      track.srclang = "en";
      track.label = "English";
      track.default = true;
      document.querySelector("video").appendChild(track);
    });
}

function main2(url) {
  const track = document.createElement("track");
  track.src = url;
  track.kind = "captions";
  track.srclang = "en";
  track.label = "English";
  track.default = true;
  document.querySelector("video").appendChild(track);
}

// main("episode.ttml");
// main2("subs.vtt");
