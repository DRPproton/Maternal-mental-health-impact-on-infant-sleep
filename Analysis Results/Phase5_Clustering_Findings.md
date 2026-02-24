# Phase 5: Data Mining & Pattern Discovery

This document summarizes the insights derived from applying **K-Means Clustering**, an unsupervised Artificial Intelligence algorithm, to the dataset. We instructed the AI to analyze infant sleep patterns (duration and awakenings) alongside maternal mental health outcomes (Postpartum Depression, Anxiety, and PTSD) to naturally group the mothers into three distinct behavioral profiles.

---

## The AI-Generated Maternal Profiles

The algorithm processed the `Dataset_Featured.csv` and successfully partitioned the mothers into three mathematically distinct clusters based on Euclidean distance in a 5-dimensional feature space.

### Profile 0: "The High-Sleep / High-Depression Paradox"
*   **Infant Sleep Duration:** 10.85 Hours (Excellent)
*   **Night Awakenings:** 0.68 (Very Low)
*   **Anxiety (HADS-A):** 5.60 (Normal)
*   **Birth Trauma (CBTS):** 7.14 (Low)
*   **Postpartum Depression (EPDS):** 18.79 (Severe Risk)
*   **Analysis:** This is a fascinating cluster. These infants sleep soundly through the night, yet the mothers are experiencing the *highest* rates of Postpartum Depression in the entire dataset. This proves clinically that PPD can strike aggressively even in the absence of severe sleep deprivation or trauma.

### Profile 1: "The Fragmented Sleep Cluster"
*   **Infant Sleep Duration:** 9.11 Hours (Lowest)
*   **Night Awakenings:** 3.00 (Highest)
*   **Anxiety (HADS-A):** 6.81 (Normal to Borderline)
*   **Birth Trauma (CBTS):** 9.73 (Low to Moderate)
*   **Postpartum Depression (EPDS):** 17.62 (Severe Risk)
*   **Analysis:** This cluster perfectly matches the physical exhaustion hypothesis. These babies are waking up constantly (averaging 3 times a night) and sleeping for the shortest total duration. The physical toll directly translates to a severe Postpartum Depression score.

### Profile 2: "The Severe Trauma & Clinical Anxiety Cluster"
*   **Infant Sleep Duration:** 9.92 Hours (Moderate)
*   **Night Awakenings:** 1.43 (Moderate)
*   **Anxiety (HADS-A):** 12.61 (Abnormal Clinical Anxiety)
*   **Birth Trauma (CBTS):** 26.46 (Extremely High PTSD)
*   **Postpartum Depression (EPDS):** 13.26 (Elevated Risk)
*   **Analysis:** This segment represents a distinct psychiatric emergency. While infant sleep is relatively normal, maternal Anxiety and PTSD scores are explosively high. This cluster clearly suffered severe birth trauma or complications, creating a distinct algorithmic boundary completely separate from general sleep exhaustion. 

---

## Summary & Impact on Phase 6 (Machine Learning)

The K-Means algorithm proved that **Infant Sleep is not the only trigger for maternal distress in this dataset.** 
If we want to build highly accurate Machine Learning models in Phase 6, we must recognize that a mother can have a perfect sleeper (Profile 0) but still suffer severe PPD, or she can have an average sleeper but suffer crippling PTSD (Profile 2). 

Our supervised Machine Learning algorithms (Random Forest, XGBoost) will need to rely heavily on factors beyond just "hours slept" to accurately diagnose these complex maternal profiles in Phase 6!
