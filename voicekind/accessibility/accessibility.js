// ======================
// Accessibility Layer
// ======================

// Highlight a given element visually
function highlightElement(el) {
    if (!el) return;
    el.style.outline = "3px solid blue";
    el.style.backgroundColor = "rgba(0,0,255,0.1)";
    el.scrollIntoView({behavior: "smooth", block: "center"});
}

// Remove highlight from an element
function removeHighlight(el) {
    if (!el) return;
    el.style.outline = "";
    el.style.backgroundColor = "";
}

// Add ARIA label dynamically
function addAriaLabel(el, label) {
    if (!el) return;
    el.setAttribute("aria-label", label);
}accessibility

// Speak text aloud
function speak(text) {
    if (!text) return;
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(text);
    synth.speak(utter);
}

// ======================
// Test / Demo Function
// ======================

// Automatically highlight and speak the first button on the page
function demoAccessibility() {
    const btn = document.querySelector("button") || document.body; // fallback
    highlightElement(btn);

    // Slight delay to ensure highlight applies before speaking
    setTimeout(() => {
        const label = btn.innerText || btn.getAttribute("aria-label") || "Element highlighted";
        speak(label);
    }, 200);

    // Remove highlight after 3 seconds
    setTimeout(() => removeHighlight(btn), 3000);
}

// ======================
// Auto-run demo if file is loaded
// ======================
window.addEventListener("load", () => {
    // Delay a little to ensure page loads completely
    setTimeout(() => demoAccessibility(), 500);
});
