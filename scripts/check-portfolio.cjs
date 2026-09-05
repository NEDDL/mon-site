const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

// Run against a started production build using Node.js 24.
// Usage: node scripts/check-portfolio.cjs http://localhost:3187
async function checkPortfolio() {
  const base = process.argv[2] || "http://localhost:3187";
  const response = await fetch(base);
  assert.equal(response.status, 200, "Homepage should load");
  const html = await response.text();
  assert.match(html, /<style[^>]*data-styled/, "Server-rendered styles are present");
  assert.ok(html.includes("#28293E") || html.includes("#28293e"), "Brand background is preserved");
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
  assert.ok(
    !/\s(?:fullHeight|darker|inconsolata|smaller|bold|maxWidth|column|gap|\$\w+)=/.test(visible),
    "Styling-only props do not leak into HTML"
  );

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
  assert.ok(visible.includes("profile.jpeg"), "Updated portrait is rendered");
  for (const asset of ["/images/profile.jpeg", "/images/me.jpg", "/images/LOGO.svg", "/favicon.ico"]) {
    const assetResponse = await fetch(new URL(asset, base));
    await assetResponse.arrayBuffer();
    assert.equal(assetResponse.status, 200, `Asset available: ${asset}`);
  }
  const portrait = await fetch(
    new URL("/_next/image?url=%2Fimages%2Fprofile.jpeg&w=640&q=75", base)
  );
  await portrait.arrayBuffer();
  assert.equal(portrait.status, 200, "Next.js image optimization works");
  assert.match(portrait.headers.get("content-type"), /^image\//);
  console.log(
    "PASS: content, headings, metadata, link labels, navigation targets, assets, and CV removal."
  );
}

checkPortfolio().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
