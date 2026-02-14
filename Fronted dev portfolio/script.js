let display = document.getElementById("calc-display");

function addValue(value) {
  display.value += value;
}

function clearCalc() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "do your self dump";
  }
}



let count = 0;
let countDisplay = document.getElementById("count");

function increase() {
  count++;
  countDisplay.innerText = count;
}

function decrease() {
  count--;
  countDisplay.innerText = count;
}

function reset() {
  count = 0;
  countDisplay.innerText = count;
}



async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "95cfacbc01ad4dc30cb25aa726063c6a";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  const res = await fetch(url);
  const data = await res.json();

  document.getElementById("weather-result").innerText =
    `Temp: ${data.main.temp}°C | ${data.weather[0].main}`;
}
 


