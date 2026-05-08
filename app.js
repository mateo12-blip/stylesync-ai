async function generateOutfit() {
  const input = document.getElementById("userInput").value;
  const result = document.getElementById("result");

  if (!input) {
    result.innerHTML = "Please enter an occasion.";
    return;
  }

  result.innerHTML = "Thinking like a stylist... 🤖";

  const response = await fetch("https://YOUR-VERCEL-URL/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ input })
  });

  const data = await response.json();

  result.innerHTML = `
    <h3>AI Outfit Suggestion</h3>
    <p>${data.result}</p>
  `;
}

