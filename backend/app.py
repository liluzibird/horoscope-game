from flask import Flask, jsonify
from flask_cors import CORS
from yelp import get_businesses

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return jsonify(get_businesses("NY","any"))
    