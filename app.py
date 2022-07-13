from flask import Flask, render_template

app = Flask(__name__)
app.testing = True

API_URL = "http://api.weatherapi.com/v1/current.json?key=&q=&aqi=no"

@app.route("/")
def home():
  return render_template('index.html')

@app.route("/app")
def App():
  return render_template('app.html')

app.run(port=5000, debug=True)