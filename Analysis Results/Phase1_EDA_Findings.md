# Phase 1: Exploratory Data Analysis (EDA) Findings

This document summarizes the insights derived from the initial exploration of the `Dataset_Cleaned_Imputed.csv` via the `p1_EDA_analysis.ipynb` notebook. The goal of this phase was to understand the fundamental distributions of the maternal demographic cohort, infant sleep behaviors, and psychological trait clusters before executing the predictive machine learning pipeline.

---

## 1. Maternal Demographic Distributions

Analyzing the sociodemographic foundation of the 410 mothers provides critical context for interpreting the upcoming clinical mental health scores.

### 1.1 Marital Status & Support Systems
*   **Observation:** The overwhelmingly vast majority of mothers in this dataset are recorded as being "in a relationship." 
*   **Significance:** This indicates a generally high baseline for domestic partnership support. 
*   **Future Question for Phase 6:** Will the machine learning models flag the small minority of "single" and "separated-divorced-widow" mothers as having a drastically higher feature importance for predicting Postpartum Depression (PPD)?

### 1.2 Education Levels
*   **Observation:** The education distribution skews heavily toward higher education, with the largest volume of mothers possessing a "university" degree or "associate/tech" degree. A very small fraction holds "compulsory school" or "no education."
*   **Significance:** This cohort represents a highly educated sample. Research often correlates higher education with better health literacy but paradoxically higher reported anxiety in some clinical settings.
*   **Future Question for Phase 6:** Does a standard machine learning model effectively predict lower PTSD scores (CBTS) for university-educated mothers, or does infant sleep deprivation neutralize the protective effect of education?

### 1.3 Maternal Age
*   **Observation:** The age distribution follows a clean, normal bell curve centered firmly around the early-to-mid 30s.
*   **Significance:** This is a statistically healthy and deeply representative sample of modern maternal age in developed regions.

---

## 2. Infant Sleep Diagnostics

Infant sleep is hypothesized to be the primary environmental stressor driving maternal mental health decline (PPD, Anxiety, and PTSD).

### 2.1 Night Sleep Duration (`sleep_night_duration_bb1`)
*   **Observation:** Infant night sleep duration follows an approximate normal distribution, peaking heavily around the 10 to 11-hour mark. However, there is a noticeable left tail, indicating a subset of infants struggling to achieve 8 hours of sleep.
*   **Future Question for Phase 6:** What is the precise, algorithmically calculated threshold where disrupted sleep actively triggers the "Abnormal" HADS-Anxiety categorization? Is the cliff at 9 hours or 7 hours?

### 2.2 Night Awakenings (`night_awakening_number_bb1`)
*   **Observation:** The count plot reveals a right-skewed distribution. The most common experiences are 1 or 2 night awakenings. However, a significant clinical tail exists where mothers are experiencing 4, 5, or even 6+ night awakenings.
*   **Significance:** Sleep fragmentation (awakenings) is physiologically distinct from sleep deprivation (total duration). 
*   **Future Question for Phase 5:** Do mothers with 6+ night awakenings cluster naturally into the severe CBTS Birth Trauma category in unsupervised K-Means models?

---

## 3. Psychological Trait Clusters: The Infant Behavior Questionnaire (IBQ)

The correlation matrix of the raw IBQ variables revealed fascinating, naturally emerging psychological clusters regarding infant temperament. These traits act as vital behavioral proxies for the stress load placed on the mother.

### Cluster A: "Social Fear / Stranger Anxiety"
*   **Variables:** 
    *   Q4: Clings to parent when introduced to an unknown adult.
    *   Q28: Refuses to go to an unknown adult.
    *   Q33: Clings to parent in the presence of several unfamiliar adults.
*   **Correlation:** Extremely high (r = 0.76 to 0.81).
*   **Insight:** These mothers are consistently reporting a distinct, cohesive "Stranger Anxiety" personality trait in their infants.

### Cluster B: "Sleep-Onset Anger"
*   **Variables:**
    *   Q9: Whines/sobs when it is bed/nap time and they do not want to go.
    *   Q16: Seems angry (crying and fussing) when put to bed.
*   **Correlation:** Strong (r = 0.65).
*   **Insight:** Highlights a clear "Resistance to Sleep" trait. These infants are not merely distressed; they actively fight sleep with anger and fussiness.

### Cluster C: "Frustration / Attention Seeking"
*   **Variables:**
    *   Q29: Cries when parent is busy and attention is unavailable.
    *   Q32: Gets upset when unable to retrieve what they want.
*   **Correlation:** Moderate-to-Strong (r = 0.50).
*   **Insight:** This cluster maps tightly to the infant's general frustration tolerance.

### The Predictive Value of IBQ Clusters
**Future Question for Phase 6:** Which specific IBQ cluster is the deadliest for maternal mental health? Do mothers of infants in the "Sleep-Onset Anger" cluster exhibit significantly higher rates of clinical Anxiety (HADS-A) compared to mothers dealing purely with "Social Fear"? 

---
*End of Phase 1 Report. The project will now proceed to Phase 2 (Statistical Analysis) and Phase 4 (Clinical Feature Engineering) to validate these hypotheses.*
