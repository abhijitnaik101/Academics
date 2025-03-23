let flashcardIndex = 0, mcqIndex = 0, matchingIndex = 0, differenceIndex = 0;
let randomMode = false; // Toggle for random mode

// Utility function to get a random index
function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

// ========== FLASHCARDS ==========
function loadFlashcard() {
    document.getElementById("flashcard-question").innerText = flashcards[flashcardIndex].question;
    document.getElementById("flashcard-answer").innerText = flashcards[flashcardIndex].answer;
    document.getElementById("flashcard-answer").classList.add("hidden");
}

function showFlashcardAnswer() {
    document.getElementById("flashcard-answer").classList.toggle("hidden");
}

function nextFlashcard() {
    flashcardIndex = randomMode ? getRandomIndex(flashcards.length) : (flashcardIndex + 1) % flashcards.length;
    document.getElementById("flashcard-index").value = flashcardIndex; // Update index input
    loadFlashcard();
}

function goToFlashcard() {
    let index = parseInt(document.getElementById("flashcard-index").value);
    if (!isNaN(index) && index >= 0 && index < flashcards.length) {
        flashcardIndex = index;
        loadFlashcard();
    } else {
        alert("❌ Invalid Index!");
    }
}

// ========== MCQs ==========
function loadMCQ() {
    let mcq = mcqs[mcqIndex];
    document.getElementById("mcq-question").innerText = mcq.question;
    let optionsContainer = document.getElementById("mcq-options");
    optionsContainer.innerHTML = "";

    mcq.options.forEach(option => {
        let btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => alert(option === mcq.answer ? "✅ Correct!" : "❌ Wrong!");
        optionsContainer.appendChild(btn);
    });
}

function nextMCQ() {
    mcqIndex = randomMode ? getRandomIndex(mcqs.length) : (mcqIndex + 1) % mcqs.length;
    document.getElementById("mcq-index").value = mcqIndex; // Update index input
    loadMCQ();
}

function goToMCQ() {
    let index = parseInt(document.getElementById("mcq-index").value);
    if (!isNaN(index) && index >= 0 && index < mcqs.length) {
        mcqIndex = index;
        loadMCQ();
    } else {
        alert("❌ Invalid Index!");
    }
}

// ========== MATCHING PAIRS ==========
function loadMatching() {
    document.getElementById("matching-table").innerHTML = "<tr><th>Term</th><th>Definition</th></tr>" +
        Object.entries(matchingPairs[matchingIndex].incorrect).map(([term, def]) => `<tr><td>${term}</td><td>${def}</td></tr>`).join("");

    document.getElementById("matching-answer").innerHTML = "<tr><th>Term</th><th>Definition</th></tr>" +
        Object.entries(matchingPairs[matchingIndex].correct).map(([term, def]) => `<tr><td>${term}</td><td>${def}</td></tr>`).join("");

    document.getElementById("matching-answer").classList.add("hidden");
}

function showMatchingAnswer() {
    document.getElementById("matching-answer").classList.toggle("hidden");
}

function nextMatching() {
    matchingIndex = randomMode ? getRandomIndex(matchingPairs.length) : (matchingIndex + 1) % matchingPairs.length;
    document.getElementById("matching-index").value = matchingIndex; // Update index input
    loadMatching();
}

function goToMatching() {
    let index = parseInt(document.getElementById("matching-index").value);
    if (!isNaN(index) && index >= 0 && index < matchingPairs.length) {
        matchingIndex = index;
        loadMatching();
    } else {
        alert("❌ Invalid Index!");
    }
}

// ========== DIFFERENCES ==========
function loadDifference() {
    let diff = differences[differenceIndex];
    document.getElementById("difference-question").innerText = diff.question;
    let tableHTML = `<tr><th>${diff.topic1}</th><th>${diff.topic2}</th></tr>`;
    diff.points.forEach(point => {
        tableHTML += `<tr><td>${point[0]}</td><td>${point[1]}</td></tr>`;
    });
    document.getElementById("difference-answer").innerHTML = tableHTML;
    document.getElementById("difference-answer").classList.add("hidden");
}

function showDifferenceAnswer() {
    document.getElementById("difference-answer").classList.toggle("hidden");
}

function nextDifference() {
    differenceIndex = randomMode ? getRandomIndex(differences.length) : (differenceIndex + 1) % differences.length;
    document.getElementById("difference-index").value = differenceIndex; // Update index input
    loadDifference();
}

function goToDifference() {
    let index = parseInt(document.getElementById("difference-index").value);
    if (!isNaN(index) && index >= 0 && index < differences.length) {
        differenceIndex = index;
        loadDifference();
    } else {
        alert("❌ Invalid Index!");
    }
}

// ========== TOGGLE RANDOM MODE ==========
function toggleRandomMode() {
    randomMode = !randomMode;
    let btn = document.getElementById("random-toggle");
    btn.style.backgroundColor = randomMode ? "#28a745" : "#dc3545"; // Green if active, Red if not
    btn.innerText = randomMode ? "🔀 Random Mode: ON" : "🔀 Random Mode: OFF";
}

// ========== INITIALIZE ==========
window.onload = () => {
    loadFlashcard();
    loadMCQ();
    loadMatching();
    loadDifference();
};
