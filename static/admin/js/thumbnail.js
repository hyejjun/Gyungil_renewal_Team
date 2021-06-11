function setThumbnail(event) {
  let reader = new FileReader();
  reader.onload =  (event)=> {
    let thumbnail = document.querySelector("#thumbnail");
    while ( thumbnail.hasChildNodes() ) { thumbnail.removeChild( thumbnail.firstChild ); }
    let img = document.createElement("img");
    img.setAttribute("src", event.target.result);
    thumbnail.appendChild(img);
  };
  reader.readAsDataURL(event.target.files[0]);
}