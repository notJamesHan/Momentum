const API_KEY = "bca923c46f8daa20814a16befa473c41";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${Math.round(data.main.temp)}° @ `;
    });
}

function onGeoError() {
  alert("Location cannot be found. Cannot display weather.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
