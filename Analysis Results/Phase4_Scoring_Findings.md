# Phase 4: Feature Engineering (Clinical Scoring) Findings

This document summarizes the mathematical transformations executed in `p4_feature_engineering.ipynb`. The goal of this phase was to take the raw, numeric survey answers and translate them into validated clinical diagnosis categories using the official scoring rubrics for the EPDS (Depression), HADS-A (Anxiety), and CBTS (PTSD).

These engineered variables now serve as the primary **Target Variables** for our future Machine Learning models.

---

## 1. Postpartum Depression (EPDS)
The EPDS requires strict reverse-scoring on 7 specific questions before summing for a total score out of 30. A score of 11 or higher indicates a clinical risk for Postpartum Depression (PPD).

### The "PPD_Risk" Distribution
*   **High Risk (1):** 392 Mothers (95.6%)
*   **Low Risk (0):** 18 Mothers (4.4%)

> [!WARNING]
> **Extreme Class Imbalance Detected!** 
> 95.6% of this dataset meets the clinical threshold for Postpartum Depression. This is an extraordinarily high prevalence. 
> **Impact for Phase 6:** Standard Machine Learning models (like Logistic Regression) will struggle immensely with this target variable. If a model just blindly guesses "Yes" for every mother, it will achieve 95.6% accuracy but be entirely useless. We will need to use synthetic balancing techniques (like SMOTE) or adjust class weights during training if we want to predict PPD accurately.

---

## 2. Clinical Anxiety (HADS-A)
The anxiety metric was isolated by summing the odd-numbered questions from the HADS survey.

### The "Anxiety_Risk" Distribution
*   **Normal (Score 0-7):** 215 Mothers (52.4%)
*   **Borderline (Score 8-10):** 89 Mothers (21.7%)
*   **Abnormal (Score 11-21):** 106 Mothers (25.9%)

*   **Impact for Phase 6:** This is a mathematically excellent distribution. Having 25% of the dataset clearly in the "Abnormal" tier gives our Machine Learning models a perfect, balanced target to learn from. Predicting "Anxiety Risk" will likely be our most successful supervised model.

---

## 3. Birth Trauma & PTSD (CBTS)
The CBTS sums the symptoms of both Birth-Related PTSD and General PTSD into a total score out of 60.

### The "CBTS_Total" Distribution
*   **Minimum Score:** 0
*   **Average Score:** 13.1
*   **Maximum Score:** 47.0
*   **Percentiles:** 50% of the mothers scored 11 or under, but the top 25% scored at or above 19, indicating a long tail of severe trauma cases within the cohort.

---
### Conclusion
Phase 4 successfully translated the survey data into pure clinical targets. We now know that PPD is nearly universal in this cohort, Anxiety is perfectly distributed for modeling, and a distinct quartile of mothers are battling severe Postpartum PTSD. 

We are officially ready to build the predictive algorithms in Phase 6.
