const button = document.getElementById('get-location-button');
async function getData(lat, long) {
  const apiKey = '674acca5f3f94ade9fe142518242203';
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${long}&aqi=no&alerts=no`;

  const response = await fetch(url);
  if (!response.ok) {
      throw new Error('Failed to fetch weather data');
  }
  return response.json();
}

async function gotLocation(position) {
  const weatherData = await getData(position.coords.latitude, position.coords.longitude);
  console.log(weatherData);
}

function failedToGot(position) {
  console.log("There has been some issue getting the location. Please try again later.");
}

button.addEventListener('click', async () => {
  navigator.geolocation.getCurrentPosition(gotLocation, failedToGot);
});

