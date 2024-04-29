function ttmlBlob(url) {
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

function vttSrc(url) {
  const track = document.createElement("track");
  track.src = url;
  track.kind = "captions";
  track.srclang = "en";
  track.label = "English";
  track.default = true;
  document.querySelector("video").appendChild(track);
}

function vttBlob(url) {
  fetch(url)
    .then((response) => response.text())
    .then((cc) => {
      const blob = new Blob([cc], { type: "text/vtt" });
      const track = document.createElement("track");
      track.src = URL.createObjectURL(blob);
      track.kind = "captions";
      track.srclang = "en";
      track.label = "English";
      track.default = true;
      document.querySelector("video").appendChild(track);
    });
}

function ttml2Vttblob(url) {
  fetch(url)
    .then((response) => response.text())
    .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((cc) => {
      const vtt = transformTTMLtoVTT(cc);
      console.log(vtt);

      const blob = new Blob([vtt], { type: "text/vtt" });
      const track = document.createElement("track");
      track.src = URL.createObjectURL(blob);
      track.kind = "captions";
      track.srclang = "en";
      track.label = "English";
      track.default = true;
      document.querySelector("video").appendChild(track);
    });
}

function transformTTMLtoVTT(ttml) {
  let vtt = "";
  ttml.querySelectorAll("tt body div p").forEach((p, i) => {
    vtt += `${i + 1}

${p.attributes.begin.value} --> ${p.attributes.end.value}
‎${p.textContent}

`;
  });
  return `WEBVTT

${vtt}`;
}
