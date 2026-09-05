const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

// Run against a started production build using Node.js 18 or newer.
// Usage: node scripts/check-portfolio.cjs http://localhost:3187
async function checkPortfolio() {
  const base = process.argv[2] || "http://localhost:3187";
  const response = await fetch(base);
  assert.equal(response.status, 200, "Homepage should load");
  const html = await response.text();
  const visible = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "");

  for (const text of [
    "Senior Software Engineer",
    "Barcelona, Spain",
    "Workfully",
    "CleverConnect",
    "Kortyx",
    "Qonto",
    "Cadastre",
    "Not actively maintained",
  ]) {
    assert.ok(visible.includes(text), `Missing content: ${text}`);
  }
  assert.equal((visible.match(/<h1\b/g) || []).length, 1, "One primary heading");
  assert.equal((visible.match(/<h3\b/g) || []).length, 6, "Six project cards");
  assert.ok(visible.includes('rel="canonical" href="https://mustafa-onal.com/"'));
  assert.ok(!/href="(?:|#)"/.test(visible), "No empty project links");
  assert.ok(!/CV\.pdf|>Resume<|>Résumé</i.test(visible), "No resume link");

  for (const id of ["hero", "about", "portfolio", "experience", "education"]) {
    assert.ok(visible.includes(`href="/#${id}"`), `Navigation to ${id}`);
    assert.ok(visible.includes(`id="${id}"`), `Target for ${id}`);
  }
  for (const anchor of visible.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)) {
    assert.ok(/href="[^"]+"/.test(anchor[1]), "All anchors have URLs");
    assert.ok(
      /aria-label="[^"]+"/.test(anchor[1]) ||
        anchor[2].replace(/<[^>]+>/g, "").trim(),
      "All links have accessible text or labels"
    );
  }

  assert.ok(
    !fs.existsSync(path.join(__dirname, "../public/CV.pdf")),
    "No public PDF asset"
  );
  const retiredCV = await fetch(new URL("/CV.pdf", base));
  await retiredCV.arrayBuffer();
  assert.equal(retiredCV.status, 404, "Retired CV URL returns 404");
  for (const asset of ["/images/me.jpg", "/images/LOGO.svg", "/favicon.ico"]) {
    const assetResponse = await fetch(new URL(asset, base));
    await assetResponse.arrayBuffer();
    assert.equal(assetResponse.status, 200, `Asset available: ${asset}`);
  }
  console.log(
    "PASS: content, headings, metadata, link labels, navigation targets, assets, and CV removal."
  );
}

checkPortfolio().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
