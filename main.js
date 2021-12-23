let $ = document;
let body = $.querySelector("body");
let inputSearch = $.querySelector(".searchbar input");
let description = $.querySelector(".description");
let btnSearch = $.querySelector(".icon-search");
let titleWeather = $.querySelector(".title .value");
let tempWeather = $.querySelector(".temp p");
let statusWeather = $.querySelector(".icon-weather .value");
let humidityWeather = $.querySelector(".humidity .value");
let windSpeedWeather = $.querySelector(".wind-speed .value");
let infoWeather = {
  tehran: { temp: "12°", status: "Sunny", humidity: 23, windSpeed: "32km/h" },
  rasht: { temp: "9°", status: "Windy", humidity: 12, windSpeed: "14km/h" },
};
btnSearch.addEventListener("click", function () {
  let inputSearchVal = inputSearch.value;
  inputSearchVal = inputSearchVal.toLowerCase();
  let weatherResult = infoWeather[inputSearchVal];
  if (weatherResult) {
    description.style.display = "block";
    // نشون دادن بزرگ اولین کلمه شهر در عنوان
    inputSearchVal = inputSearchVal[0].toUpperCase() + inputSearchVal.slice(1);
    // گرفتن مقادیر و اضافه کردن به صفحه
    titleWeather.textContent = inputSearchVal;
    tempWeather.innerHTML = weatherResult.temp;
    statusWeather.innerHTML = weatherResult.status;
    humidityWeather.innerHTML = weatherResult.humidity;
    windSpeedWeather.innerHTML = weatherResult.windSpeed;
  } else {
    description.style.display = "";
    alert("incurrect!");
  }
});
(function () {
  let image = [
    "2082049.jpg",
    "daniele-buso-qzUenL35ZYw-unsplash.jpg",
    "nathan-queloz-VWZJgYLpmuI-unsplash.jpg",
    "zu-photography-JjAhzqZzk1M-unsplash.jpg",
  ];
  // هر بار عددی از ۰ تا تعداد آرایه بالا انتخاب میشه رندوم و با ورود به صفحه عکس شانسی انتخاب میشود
  let randNum = Math.floor(Math.random() * image.length);
  body.style.backgroundImage = `url('${image[randNum]}')`;
})();
