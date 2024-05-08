"use strickt";
//select elements
const APIKey = "3fefae252149d0289a0768154489e9ba";
const searchcity = document.querySelector(".search");
console.log(searchcity.value);
const city = document.querySelector(".city");
const buttonIcon = document.querySelector(".buttonSearch");
const temperature = document.querySelector(".temperature");
const icon = document.querySelector(".icon");
console.log(icon);
const weatherDiv = document.querySelector(".weather");

console.log(buttonIcon);
let cityName;
let response;
console.log(cityName);
async function getWeather() {
  response = await (
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`
    )
  ).json();
  console.log(response);
  let convertTemp = Math.trunc(response.main.temp - 273.15);

  temperature.textContent = `${convertTemp} °c`;
  weatherDiv.textContent = response.weather[0].description;
  icon.src = `/images/${response.weather[0].main}.png`;

  return response;
}

buttonIcon.addEventListener("click", (event) => {
  event.preventDefault();
  cityName = searchcity.value;

  city.textContent = cityName.toUpperCase();
  console.log(cityName);
  getWeather();
});
