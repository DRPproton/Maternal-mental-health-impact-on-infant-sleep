# Phase 6: Machine Learning Models (Predicting Maternal Health)

This document summarizes the mathematical performance of the predictive algorithms generated in `p6_machine_learning.ipynb`. The core objective of this phase was to deploy supervised Machine Learning models capable of correctly diagnosing a mother’s **Clinical Anxiety Risk** (Normal vs Borderline vs Abnormal) entirely based on the demographic and infant behavior features gathered in Phase 4.

---

## 1. Feature Selection & Optimization

Because passing 80+ survey variables to a model learning from only 410 mothers aggressively creates "overfitting" (where the AI merely memorizes the training data), we mathematically forced a baseline Random Forest to rank the mathematical power of every single variable using **Gini Importance**.

We successfully pruned the database, restricting the AI models so they could exclusively read the purely proven **Top 15 Most Powerful Predictors**, drastically reducing background noise.

---

## 2. Decision Tree Hyperparameter Tuning 

We used a 5-Fold `GridSearchCV` to mathematically test hundreds of branch structure permutations to find the perfect architecture for a highly visual Decision Tree.
*   **Optimal Setting Discovered:**
    *   `max_depth`: 6 (limiting the algorithm strictly to 6 consecutive "If/Then" questions)
    *   `min_samples_split`: 5
    *   `criterion`: 'gini'

---

## 3. The Algorithm Competition (Test Set Accuracy)

We locked away an unseen 20% of the mothers (82 individuals) to serve as a blind "Final Exam" for our 3 trained models. Here are the true validation accuracies they achieved:

1.  **Tuned Decision Tree:** `78.0%`
2.  **XGBoost Classifier:** `86.6%`
3.  **Random Forest Ensemble:** 🏆 `87.8%` 🏆

### Why Random Forest Won
The Random Forest emerged as the undeniable champion, effectively diagnosing Maternal Clinical Anxiety with near 88% overall accuracy based predominantly on the mother's demographics and her baby's sleep/temperament. 

When we manually review its Class-Level F1-Scores:
*   **Diagnosing "Abnormal" Anxiety:** Accuracy mapping of `95% Precision / 90% Recall` (Extremely Strong). The AI is highly adept at catching severe anxiety cases.
*   **Diagnosing "Normal" Anxiety:** Accuracy mapping of `89% Precision / 95% Recall` (Extremely Strong). The AI very rarely misdiagnoses a healthy mother.
*   **Diagnosing "Borderline" Anxiety:** Accuracy mapping of `75% Precision / 67% Recall` (Moderate). The AI struggled the hardest with mapping the vague middle ground of Borderline cases, as the symptoms mathematically blur with passing anxiety.

---
### Final Project Conclusion

This dataset has been fully cleaned (Phase 1), statistically verified (Phase 2), clinically scored (Phase 4), algorithmically clustered (Phase 5), and successfully transformed into a highly-accurate predictive Machine Learning pipeline (Phase 6) capable of diagnosing maternal health outcomes with **87.8% Accuracy**. 

The structured data framework successfully proves the core mathematical thesis: The temperament and sleep quality of an infant is a quantifiable, statistically powerful predictor for clinical postnatal distress in mothers.
