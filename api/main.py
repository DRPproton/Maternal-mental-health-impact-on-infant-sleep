from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import pandas as pd
import os

app = FastAPI(title="Maternal Mental Health Predictor API")

# Allow the GitHub Pages Frontend to speak to this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allow all origins for local testing
    allow_credentials=False, # Must be False when origins is [*]
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the Frozen AI Brain
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
rf_model = joblib.load(os.path.join(BASE_DIR, 'rf_model.pkl'))
model_features = joblib.load(os.path.join(BASE_DIR, 'model_features.pkl'))

# Strict Validation Blueprint for Incoming Frontend Data
class PatientData(BaseModel):
    gestationnal_age: float
    hads_1: int
    hads_3: int
    hads_5: int
    hads_7: int
    hads_9: int
    hads_11: int
    hads_13: int
    epds_4: int
    epds_5: int
    cbts_13: int
    cbts_14: int
    cbts_15: int
    cbts_19: int
    cbts_22: int

@app.post("/predict")
def predict_anxiety(data: PatientData):
    """
    Receives JSON payload from the frontend.
    Arranges it into the exact mathematical order the AI expects.
    Returns 0 (Abnormal), 1 (Borderline), or 2 (Normal).
    """
    # 1. Convert JSON payload into a dictionary
    input_dict = data.dict()
    
    # 2. Convert dictionary into a Pandas DataFrame structure (1 row)
    df = pd.DataFrame([input_dict])
    
    # 3. Forcibly reorder the columns to guarantee they match the Random Forest's exact original training order
    df = df[model_features]
    
    # 4. Ask the AI to diagnose the Patient
    pred_class = rf_model.predict(df)[0]
    pred_probs = rf_model.predict_proba(df)[0].tolist()
    
    # 5. Return the Integer Prediction AND the Probabilities back to the Frontend
    return {
        "prediction": int(pred_class),
        "probabilities": pred_probs
    }