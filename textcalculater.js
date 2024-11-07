function analyzeText() {
  const text = document.getElementById("textInput").value;

  // Count values
  const characterCount = text.length;
  const words = text.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const numberCount = (text.match(/\d+/g) || []).length;
  const lineCount = text.split(/\n/).length;
  const specialCharCount = (text.match(/[^a-zA-Z0-9\s]/g) || []).length;
  const longestWord = words.reduce((longest, word) => word.length > longest.length ? word : longest, "");
  const totalWordLength = words.reduce((sum, word) => sum + word.length, 0);
  const averageWordLength = wordCount === 0 ? 0 : (totalWordLength / wordCount).toFixed(2);

  // Update the results with animation
  function animateCount(elementId, value) {
    const element = document.getElementById(elementId);
    element.textContent = value;
    element.classList.add("animate"); // Add animation class

    // Remove the animation class after animation ends, so it can re-trigger on next click
    setTimeout(() => element.classList.remove("animate"), 600);
  }

  // Animate each count value with a slight delay for staggered effect
  animateCount("characterCount", characterCount);
  setTimeout(() => animateCount("wordCount", wordCount), 100);
  setTimeout(() => animateCount("numberCount", numberCount), 200);
  setTimeout(() => animateCount("lineCount", lineCount), 300);
  setTimeout(() => animateCount("specialCharCount", specialCharCount), 400);
  setTimeout(() => animateCount("longestWord", longestWord || "N/A"), 500);
  setTimeout(() => animateCount("averageWordLength", averageWordLength), 600);
}
