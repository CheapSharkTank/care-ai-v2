from flask import Flask, request, jsonify
import numpy as np
import joblib

app = Flask(__name__)
scalar = joblib.load("./joblibs/Scaler.joblib")
svc = joblib.load("./joblibs/svc.joblib")


@app.route("/predict", methods=["POST"])
def predict() :
    form_data = request.get_json()
    
    if not form_data:
        return jsonify({
            "success": False,
            "message": "No data received"
        }), 400

    age = form_data["age"]
    chest_pain = form_data["chestPain"]
    rest_bpm = form_data["restBPM"]
    cholesterol = form_data["cholesterol"]
    max_heart = form_data["maxHeart"]
    old_peak = form_data["oldPeak"]
    ca = form_data["ca"]
    thalassemia = form_data["thalassemia"]
    
    arr = [age, chest_pain, rest_bpm, cholesterol, max_heart, old_peak ,ca, thalassemia]
    data = np.array([arr])
    data_scaled = scalar.transform(data)

    # Prediction
    prediction = svc.predict(data_scaled)
    result = 'High risk of heart attack' if prediction[0] == 1 else 'Low risk of heart attack'
    
    if not result:
        return jsonify({
            "success": False,
            "message": "Prediction Error",
        }), 400
    
    return jsonify({
        "success": True,
        "message": "Prediction received",
        "data": result
    }), 200

if (__name__ == "__main__"):
    app.run(debug=True)