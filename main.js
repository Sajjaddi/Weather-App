const $ = document;
let body = $.querySelector("body");
let inputSearch = $.querySelector(".searchbar input");
let description = $.querySelector(".description");
let btnSearch = $.querySelector(".icon-search");
let titleWeather = $.querySelector(".title .value");
let tempWeather = $.querySelector(".temp p");
let statusWeather = $.querySelector(".icon-weather .value");
let statusWeatherImg = $.querySelector(".icon-weather img");
let humidityWeather = $.querySelector(".humidity .value");
let windSpeedWeather = $.querySelector(".wind-speed .value");
const apiKey = "5545d7031de44f0343d0a37ecd2f5b32";
let image = [
  "2082049.jpg",
  "daniele-buso-qzUenL35ZYw-unsplash.jpg",
  "nathan-queloz-VWZJgYLpmuI-unsplash.jpg",
  "zu-photography-JjAhzqZzk1M-unsplash.jpg",
];
// هر بار عددی از ۰ تا تعداد آرایه بالا انتخاب میشه رندوم و با ورود به صفحه عکس شانسی انتخاب میشود
let randNum = Math.floor(Math.random() * image.length);
body.style.backgroundImage = `url('${image[randNum]}')`;

let getWeather = async () => {
  let inputSearchVal = inputSearch.value.toLowerCase();
  let weatherResult = await (
    await fetch( // گرفتن جزئیات اب و هوا از طریق ای پی آی
      `https://api.openweathermap.org/data/2.5/weather?q=${inputSearchVal}&appid=${apiKey}`
      )
      ).json();
      console.log(weatherResult);
      if (weatherResult.cod === 200) {
        description.style.display = "block";
        setWeather(weatherResult);
        setTimeout(() => inputSearch.value = ''  , 500);
  } else {
    incurrectVal();
  }
};
let setWeather = (weatherResult)=> {
  titleWeather.textContent = weatherResult['name'];
  // تبدیل دمای کلوین به سیلیسیوس
  let fomulaToC = (weatherResult['main']['temp'] - 273.15).toFixed(1)
  tempWeather.innerHTML = `${fomulaToC}°C`;
  statusWeather.innerHTML = weatherResult['weather'][0]['main'];
  humidityWeather.innerHTML = weatherResult['main']['humidity'];
  windSpeedWeather.innerHTML = `${weatherResult['wind']['speed']} km/h`;
  statusWeatherImg.src = `http://openweathermap.org/img/wn/${weatherResult['weather'][0]['icon']}.png`
  console.log(weatherResult);
}
let incurrectVal = () => {
  description.style.display = "";
  alert("incurrect!");
};
btnSearch.addEventListener("click", getWeather);
window.addEventListener("load", () => inputSearch.focus());
inputSearch.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    getWeather();
  }
});
