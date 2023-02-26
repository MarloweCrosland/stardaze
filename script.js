let key = "Cbpg6Hegabwlyditrc06nf7Jkoyaf9bQTibmHDL4";

const getPhoto = () => {
  let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${key}`;
  fetch(apiUrl).then((response) => {
    if (response.ok) {
      console.log(response);
      response.json().then((data) => {
        console.log(data);
        displayImage(data);
      });
    }
  });
};

const displayImage = (data) => {
  let htmlTemplate = `<img src=${data.hdurl}>`;
  const imageContainer = document.getElementById("star-photo");
  const imageCaption = document.getElementById("caption");
  imageContainer.innerHTML = htmlTemplate;
    imageCaption.innerHTML = data.title

    const imageText = document.getElementById('about-text');
    imageText.innerHTML = data.explanation
};

getPhoto();
