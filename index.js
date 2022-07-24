let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Spetember",
  "Ocktober",
  "November",
  "December"
];

let currentDay = days[now.getDay()];
let currentMonth = months[now.getMonth()];
let currentDate = now.getDate();
now = document.querySelector("#time");
now.innerHTML = `  ${currentDay}, ${currentMonth}, ${currentDate}`;

//function search(event) {
//event.preventDefault();
//let city = document.querySelector("#city-input");
//let h2 = document.querySelector("h2");
//h2.innerHTML = `${city.value}`;

//let form= document.querySelector("#search-form");
//form.addEventListener("submit",search);

function searchCity(event) {
  event.preventDefault();
  let cityName = document.querySelector("#city-input");
  let city = `${cityName.value}`;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e8a7198dcdc5f4458611e02123c52297`;

  axios.get(apiUrl).then(showTemperature);
}

let search = document.querySelector("#search-form");
search.addEventListener("submit", searchCity);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temp = document.querySelector("#temperature");
  temp.innerHTML = ` ${temperature} °C`;
  let description = response.data.weather[0].description;
  console.log(description);
  let desWeather = document.querySelector("#description");
  desWeather.innerHTML = ` ${description}`;
  let name = document.querySelector("#city");
  name.innerHTML = response.data.name;
}
