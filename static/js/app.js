//? Temp data
data = {
	location: {
		name: "Manama",
		region: "Al Manamah",
		country: "Bahrain",
	},
	current: {
		temp_c: 35.0,
		temp_f: 95.0,
    feelslike_c: 51.0,
    feelslike_f: 123.8,

		is_day: 0,
		condition: {
			text: "Clear",
		},

		wind_kph: 11.2,
		gust_kph: 18.7,

		humidity: 63,
		cloud: 0,
    
		uv: 8.0,
	},
};


//? Elements
//* Center
const temp_celsius = document.getElementById("cel");
const temp_fahrenheit = document.getElementById("fahren");

function updateTemperatureData() {
  temp_celsius.textContent = `${data.current.temp_c}°C`;
  temp_fahrenheit.textContent = `${data.current.temp_f}°F`;
}

updateTemperatureData()

//* Events
temp_celsius.addEventListener('click', () => {
  temp_celsius.hidden = true;
  temp_fahrenheit.hidden = false;
})
temp_fahrenheit.addEventListener("click", () => {
	temp_fahrenheit.hidden = true;
	temp_celsius.hidden = false;
});