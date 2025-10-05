from flask import Flask, request, render_template, flash, url_for, jsonify, session
import os
import json
import psycopg2
from flask_cors import CORS



app= Flask(__name__)
app.secret_key = "quiz_app"
CORS(app)

conn = psycopg2.connect(
    host ="localhost",
    database = "quiz_data",
    user = "postgres",
    password = "Halosucks10@"
)

cur = conn.cursor()                                                                                                                                                                                                                         

@app.route('/get_questions')
def g_question():
    cur.execute("""
    SELECT question_text, option1, option2, option3, option4, correct_answer, difficulty, category FROM quiz_data
                """)
    rows = cur.fetchall()

    question_list = []
    for row in rows:
        question_dict = {
            "question": row[0],
            "options": [row[1], row[2], row[3], row[4]],
            "answer": row[5],
            "difficulty": row[6],
            "category": row[7].
        }

        question_list.append(question_dict)
    return jsonify(question_list)
