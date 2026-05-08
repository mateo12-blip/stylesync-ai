function generateOutfit() {
  const input = document.getElementById("userInput").value.toLowerCase().trim();
  const result = document.getElementById("result");

  if (!input) {
    result.innerHTML = "⚠️ Please enter an occasion like 'date', 'party', or 'interview'.";
    return;
  }

  let outfit = "";
  let vibe = "";

  // DATE NIGHT
  if (input.includes("date")) {
    vibe = "💘 Confident, clean, attractive";
    outfit = `
      <h3>💘 Date Night Outfit</h3>
      <p><b>Top:</b> Black fitted shirt</p>
      <p><b>Bottom:</b> Dark slim jeans</p>
      <p><b>Shoes:</b> White sneakers or loafers</p>
      <p><b>Accessories:</b> Minimal watch</p>
    `;
  }

  // INTERVIEW
  else if (input.includes("interview")) {
    vibe = "💼 Professional, sharp, trustworthy";
    outfit = `
      <h3>💼 Interview Outfit</h3>
      <p><b>Top:</b> White or light blue shirt</p>
      <p><b>Bottom:</b> Black or navy trousers</p>
      <p><b>Shoes:</b> Formal shoes</p>
      <p><b>Accessories:</b> Simple belt, clean watch</p>
    `;
  }

  // PARTY
  else if (input.includes("party")) {
    vibe = "🎉 Bold, trendy, social";
    outfit = `
      <h3>🎉 Party Outfit</h3>
      <p><b>Top:</b> Graphic tee or oversized shirt</p>
      <p><b>Bottom:</b> Cargo pants or slim jeans</p>
      <p><b>Shoes:</b> Sneakers</p>
      <p><b>Accessories:</b> Chain or bracelet</p>
    `;
  }

  // SCHOOL
  else if (input.includes("school")) {
    vibe = "📚 Simple, comfortable, clean";
    outfit = `
      <h3>📚 School Outfit</h3>
      <p><b>Top:</b> Plain hoodie or t-shirt</p>
      <p><b>Bottom:</b> Jeans or joggers</p>
      <p><b>Shoes:</b> Comfortable sneakers</p>
      <p><b>Accessories:</b> Backpack</p>
    `;
  }

  // DEFAULT
  else {
    vibe = "✨ Clean, balanced everyday style";
    outfit = `
      <h3>✨ Suggested Outfit</h3>
      <p><b>Top:</b> Fitted or oversized plain shirt</p>
      <p><b>Bottom:</b> Jeans or chinos</p>
      <p><b>Shoes:</b> Sneakers or loafers</p>
      <p><b>Accessories:</b> Minimal style watch</p>
    `;
  }

  result.innerHTML = `
    ${outfit}
    <hr style="margin:15px 0; border:1px solid #333;" />
    <p><b>Style Vibe:</b> ${vibe}</p>
  `;
}
