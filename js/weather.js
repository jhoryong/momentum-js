const API_KEY = 'a0138e2a606412877a4d2cd60cf8104e';
const el_location = document.querySelector('#weather-location');
const el_description = document.querySelector('#weather-description');
const el_temp = document.querySelector('#weather-temp');
let a = 0;

function onGeoOk(position) {
  // if (!a) return;
  // console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      const location = data.name;
      const description = data.weather[0].description;
      const temp = Math.floor(data.main.temp);
      el_location.classList.add('fade-out');
      setTimeout(() => {
        el_location.textContent = location;
        el_description.textContent = description;
        el_temp.textContent = temp + '°';
        el_location.classList.remove('fade-out');
        el_location.classList.add('fade-in');
        el_description.classList.add('fade-in');
        el_temp.classList.add('fade-in');
      }, 500);
    });
}

function onGeoError() {
  alert('위치 정보 찾기 실패');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
