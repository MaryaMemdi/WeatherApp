"use strickt";
//select elements
const APIKey = "3fefae252149d0289a0768154489e9ba";
const searchcity = document.querySelector(".search");
console.log(searchcity.value);
const city = document.querySelector(".city");
const buttonIcon = document.querySelector(".buttonSearch");
console.log(buttonIcon);
//get location and weather
buttonIcon.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(searchcity.value);
  city.textContent = searchcity.value;
  return searchcity.value;
});
let cityName = searchcity.value;
const getLocation = fetch(
  `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${APIKey}`
)
  .then((response) => response.json())
  .then((data) => console.log(data));
