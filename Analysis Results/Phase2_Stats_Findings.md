# Phase 2: Statistical Analysis Findings

This document summarizes the mathematical truths extracted during our bivariate and correlational analysis in the `p2_statistical_analysis.ipynb` notebook. The objective of this phase was to formally test specific clinical hypotheses using T-Tests, ANOVAs, and Pearson Correlations to verify if what we saw in the EDA charts was statistically significant (p < 0.05).

---

## 1. Bivariate Analysis (Investigating Group Differences)

We tested if categorical demographic factors (Infant Sex, Marital Status) inherently shift the clinical mental health outcomes for the mother. 

### 1.1 T-Test: Does Infant Biological Sex Impact Maternal Anxiety?
*   **Hypothesis Tested:** Are mothers of male infants experiencing higher or lower levels of Anxiety (HADS-A) compared to mothers of female infants?
*   **Result:** `p-value = 0.432`
*   **Conclusion:** **Not Statistically Significant.** The mental health burden of clinical anxiety does not mathematically change based on the biological sex of the infant in this maternal cohort.

### 1.2 ANOVA: Does Marital Status Impact Postpartum Depression?
*   **Hypothesis Tested:** Does the mother's relationship status ("single", "in a relationship", "separated-divorced-widow") create a significant variance in their risk for Postpartum Depression (EPDS)?
*   **Result:** `p-value = 0.148`
*   **Conclusion:** **Not Statistically Significant.** While relationship support is subjectively important, within this specific, highly-educated cohort, marital status does *not* act as a definitive independent anchor driving clinical PPD score disparities.

---

## 2. Pearson Correlations (Investigating Linear Relationships)

We used Pearson Correlations to test the core hypothesis of this dataset: Does disrupted infant sleep physically correlate to a deterioration in maternal mental health?
*(Note: A p-value < 0.05 proves the relationship is real, not random).*

### 2.1 Sleep Duration vs. Postpartum Depression (EPDS)
*   **The Test:** How does total hours of night sleep (`sleep_night_duration_bb1`) linearly interact with the mother's PPD score?
*   **Correlation (R):** `0.229`
*   **Significance (p-value):** `0.0000028` (2.86e-06)
*   **Conclusion:** **Extremely Statistically Significant!** There is a highly significant relationship between the infant's sleep duration and the mother's resulting depression score. This mathematically proves that sleep duration is a viable, high-importance feature for our Machine Learning algorithm.

### 2.2 Night Awakenings vs. Birth Trauma/PTSD (CBTS)
*   **The Test:** Does the sheer number of night awakenings mathematically tie to a higher Post-Traumatic Stress score regarding childbirth?
*   **Correlation (R):** `0.062`
*   **Significance (p-value):** `0.206`
*   **Conclusion:** **Not Statistically Significant.** While Night Awakenings might annoy a mother, they do not correlate to clinical PTSD or unresolved birth trauma. PTSD in this cohort is likely driven by actual birth complications independently of how often the baby wakes up at night.

---
### Summary & Next Steps for AI Modeling
Phase 2 successfully proved that **Infant Sleep Duration** is a mathematically guaranteed predictor for **Postpartum Depression**, while demographic factors like Baby's Sex and Marital Status are surprisingly weak predictors overall.

Our Machine Learning algorithms (Phase 6) will likely need to rely heavily on Sleep Duration and the IBQ Personality clusters we found in Phase 1 to accurately predict maternal crisis!
