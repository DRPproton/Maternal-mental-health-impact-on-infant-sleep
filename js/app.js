// --- Smooth Scrolling & Active State for Sidebar ---
const sections = document.querySelectorAll('.paper-section');
const navLinks = document.querySelectorAll('.nav-links a');

// Use a simpler, math-based scroll spy that respects manual clicks
let isScrolling = false;
let scrollTimeout;

window.addEventListener('scroll', () => {
    // If we're smoothly scrolling via a click, ignore this event to prevent flicker
    if (isScrolling) return;

    let current = '';
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        // 150px offset to trigger just before it hits the top of the monitor
        if (scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            link.classList.remove('active');
            if (current !== '' && href === '#' + current) {
                link.classList.add('active');
            }
        }
    });
});

// Smooth Scroll Effect when clicking nav links
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (!targetId || !targetId.startsWith('#')) return; // Ignore external links

        e.preventDefault();

        // Pause the scroll-spy observer during the smooth scroll animation
        isScrolling = true;

        // Update active class immediately on click
        navLinks.forEach(nav => {
            if (nav.getAttribute('href') && nav.getAttribute('href').startsWith('#')) {
                nav.classList.remove('active');
            }
        });
        this.classList.add('active');

        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const topPos = targetSection.getBoundingClientRect().top + window.scrollY - 50;
            window.scrollTo({
                top: topPos,
                behavior: 'smooth'
            });

            // Re-enable scroll spy after scrolling finishes (~800ms)
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                isScrolling = false;
            }, 800);
        }
    });
});


// --- Image Zoom Modal Logic (Click chart to enlarge) ---
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("modal-caption");
const images = document.querySelectorAll('.lazy-zoom');
const closeBtn = document.querySelector('.close-modal');

images.forEach(img => {
    img.addEventListener('click', function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


// --- Form Submission Logic (Calling FastAPI) ---
document.getElementById('predict-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    // Gather the 15 Top Features
    const payload = {
        gestationnal_age: parseInt(document.getElementById('gestationnal_age').value),
        hads_1: parseInt(document.getElementById('hads_1').value),
        hads_3: parseInt(document.getElementById('hads_3').value),
        hads_5: parseInt(document.getElementById('hads_5').value),
        hads_7: parseInt(document.getElementById('hads_7').value),
        hads_9: parseInt(document.getElementById('hads_9').value),
        hads_11: parseInt(document.getElementById('hads_11').value),
        hads_13: parseInt(document.getElementById('hads_13').value),
        epds_4: parseInt(document.getElementById('epds_4').value),
        epds_5: parseInt(document.getElementById('epds_5').value),
        cbts_13: parseInt(document.getElementById('cbts_13').value),
        cbts_14: parseInt(document.getElementById('cbts_14').value),
        cbts_15: parseInt(document.getElementById('cbts_15').value),
        cbts_19: parseInt(document.getElementById('cbts_19').value),
        cbts_22: parseInt(document.getElementById('cbts_22').value)
    };

    const resultBox = document.getElementById('prediction-result');
    const resultText = document.getElementById('result-text');

    resultText.innerHTML = "🧠 AI Processing...";
    resultText.style.color = "white";
    resultBox.classList.remove('hidden');

    try {
        const response = await fetch('http://localhost:8000/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        // Render string prediction based off the raw Int
        if (data.prediction === 0) {
            resultText.innerHTML = "ABNORMAL ANXIETY WARNING";
            resultText.style.color = "#ef4444"; // red
        } else if (data.prediction === 1) {
            resultText.innerHTML = "BORDERLINE ANXIETY";
            resultText.style.color = "#f59e0b"; // yellow
        } else {
            resultText.innerHTML = "NORMAL ANXIETY";
            resultText.style.color = "#10b981"; // success green
        }

        // Render the exact probabilities for all 3 classes
        const p_abnormal = (data.probabilities[0] * 100).toFixed(1);
        const p_borderline = (data.probabilities[1] * 100).toFixed(1);
        const p_normal = (data.probabilities[2] * 100).toFixed(1);

        document.getElementById('prob-abnormal').innerText = p_abnormal + "%";
        document.getElementById('bar-abnormal').style.width = p_abnormal + "%";

        document.getElementById('prob-borderline').innerText = p_borderline + "%";
        document.getElementById('bar-borderline').style.width = p_borderline + "%";

        document.getElementById('prob-normal').innerText = p_normal + "%";
        document.getElementById('bar-normal').style.width = p_normal + "%";

    } catch (err) {
        resultText.innerHTML = "API Connection Error";
        resultText.style.color = "#ef4444";
        console.error(err);
    }
});


// --- Clear Form Logic ---
document.getElementById("clear-btn").addEventListener("click", function() {
    document.getElementById("predict-form").reset();
    document.getElementById("prediction-result").classList.add("hidden");
});
