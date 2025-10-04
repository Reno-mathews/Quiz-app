from flask import Flask, request, render_template, flash, url_for, jsonify, session
import os
import json
import psycopg2
from flask_cors import CORS


app= Flask(__name__)
app.secret_key = "quiz_app"


conn = psycopg2.connect(
    host ="localhost",
    database = "quiz_data",
    user = "postgres",
    password = "Halosucks10@"
)

cur = conn.cursor()

@app.route('/get_questions')
def