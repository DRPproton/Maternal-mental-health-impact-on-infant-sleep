# Predicting Maternal Mental Health: An AI & Data Analysis Project

This project investigates the complex relationship between infant sleep patterns, infant temperament, and maternal mental health outcomes—specifically Postpartum Depression (PPD), Clinical Anxiety, and Post-Traumatic Stress Disorder (PTSD) stemming from childbirth. 

Using a cohort of 410 mothers of infants aged 3 to 12 months, this repository traces the complete end-to-end data science lifecycle: starting from exploratory data analysis and rigorous statistical hypothesis testing, moving into unsupervised K-Means clustering, and culminating in the deployment of an 87.8% accurate Machine Learning classification pipeline powered by a Random Forest algorithm.

We formalized these findings by engineering a complete interactive Web Application (Interactive Research Paper) that hosts the trained AI, allowing users to enter infant data and receive a live clinical anxiety prediction.

## Project Architecture & Folder Structure

This repository is strictly organized into distinct functional domains to separate the raw data, the analytical engine, and the deployed software architecture:

*   **`data/`** 
    Contains the raw and processed CSV datasets (`Dataset_maternal_mental_health_infant_sleep.csv`), alongside the heavily sanitized `Dataset_Cleaned_Imputed.csv` and `Dataset_Featured.csv` utilized for AI training.
*   **`notebooks/`** 
    The core experimental laboratory. Contains all 6 sequential Jupyter Notebooks (`p1_EDA_analysis.ipynb` through `p6_machine_learning.ipynb`) that document the step-by-step mathematical extraction, data cleaning, and algorithmic tuning.
*   **`Analysis Results/`** 
    Detailed Markdown reports summarizing the mathematical findings from each phase (e.g., `Phase4_Scoring_Findings.md`, `Phase6_ML_Findings.md`).
*   **`Documents/`** 
    All supporting project documentation, research assets, data codebooks (Excel), and verified clinical scoring rulebooks (EPDS, HADS, CBTS PDFs).
*   **`api/`** 
    The Python backend. Contains the artificially intelligent `rf_model.pkl` and a FastAPI server (`main.py`) that handles incoming Cross-Origin predictions and returns exact probability confidence matrixes. 
*   **`web/`** 
    The Frontend User Interface. A beautiful, static Glassmorphism web application (`index.html`, `js/app.js`, `css/styles.css`) that serves as an interactive research paper and communicates directly with the Python API.

## How to Run the Predictive Web App

To explore the findings and test the live Machine Learning model:

1.  **Start the Backend Engine**:
    Open a terminal, navigate to the `api` folder, and run the FastAPI server:
    ```bash
    cd api
    uvicorn main:app --reload
    ```
2.  **Launch the Frontend**:
    Open `web/index.html` directly in any standard web browser.
3.  **Test the AI**:
    Scroll to the bottom of the Interactive Paper, fill out the clinical survey questions, and execute the algorithm to observe the live confidence probabilities.
