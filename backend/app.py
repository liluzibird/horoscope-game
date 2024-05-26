from flask import Flask, jsonify, request
from flask_cors import CORS
from yelp import get_businesses
import json

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    location = request.args.get('location')
    return jsonify(get_businesses(location,"any"))
    