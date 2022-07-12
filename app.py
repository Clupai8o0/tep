from flask import Flask

app = Flask(__name__)

API_URL = "http://api.weatherapi.com/v1/current.json?key=&q=&aqi=no"

@app.route("/")
def home():
  return "Hello World"

app.run(port=5000)